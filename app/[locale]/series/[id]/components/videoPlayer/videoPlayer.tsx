"use client";

import { useState, useRef, useEffect, useCallback } from "react";

import "./video.css";
import { Icon } from "@/components/ui/icon";
import { Slider } from "@/components/ui/slider";

import { motion } from "framer-motion";
import { Episodes } from "../episodes";
import { Button } from "@/components/ui/button";
import { cn, scrollTo } from "@/lib/utils";
import Hls from "hls.js";
import { Loader2Icon } from "lucide-react";
import { Info } from "../info";
import { ContentItem, Locale, SeriesItem } from "@/types/model";

interface VideoPlayerProps {
  data: ContentItem[];
  meta: SeriesItem;
  locale: Locale;
  count: number;
}

const VideoPlayer = ({ data, meta, locale, count }: VideoPlayerProps) => {
  const playerWrapRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [isActive, setActive] = useState(true);
  const [isShowEpisodes, setShowEpisodes] = useState(false);
  const [isStarted, setStarted] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isIdle, setIsIdle] = useState(true);

  const [link, setLink] = useState(data[0].cf_link);

  const timerRef = useRef<ReturnType<typeof setTimeout> | string>("null");

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (progressBarRef.current && videoRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = percent * duration;

        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [duration]
  );

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current?.currentTime || 0);
  };

  const togglePlay = () => {
    if (isLoading) return;

    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    setIsPlaying(!isPlaying);

    if (!isStarted) {
      setStarted(true);
    }
  };

  const handleVolumeChange = (v: number[]) => {
    const newVolume = v[0] / 100;

    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    if (playerWrapRef.current && videoRef.current && playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerWrapRef.current.requestFullscreen();

        videoRef.current!.style.height = "100vh";
        playerRef.current!.style.maxHeight = "100vh";
        setFullScreen(true);
      }
    }
  };

  const handleScreenChange = () => {
    if (!document.fullscreenElement && videoRef.current) {
      videoRef.current.style.height = "calc(100vh - 80px)";
      playerRef.current!.style.maxHeight = "";
      setFullScreen(false);
    }
  };

  const handleMouseOver = () => {
    setActive(false);
  };

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleVideoMouseMove = () => {
    setIsIdle(false);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 3000);
  };

  useEffect(() => {
    document.body.style.cursor =
      isIdle && isPlaying && isActive ? "none" : "default";
  }, [isIdle, isPlaying, isActive]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isSeeking && progressBarRef.current && videoRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = Math.max(0, Math.min(percent * duration, duration));

        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleMouseUp = () => {
      setIsSeeking(false);
    };

    if (isSeeking) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSeeking, duration]);

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current?.duration || 0);
    }
  }, [videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    document.addEventListener("fullscreenchange", handleScreenChange);
    if (player) {
      player.addEventListener("mouseleave", handleMouseOver);
      player.addEventListener("mouseenter", handleMouseEnter);
      player.addEventListener("mousemove", handleVideoMouseMove);
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleScreenChange);
      if (player) {
        player.removeEventListener("mouseleave", handleMouseOver);
        player.removeEventListener("mouseenter", handleMouseEnter);
        player.removeEventListener("mousemove", handleVideoMouseMove);
      }
    };
  }, [playerRef]);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = link;

    if (Hls.isSupported() && video) {
      const hls = new Hls();

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.AUDIO_TRACK_LOADED, (_, data) => {
        setDuration(data.details.totalduration || 0);
        const lang = `_${locale.toUpperCase()}`;

        const track =
          hls.audioTracks.find((item) => item.name.indexOf(lang) >= 0)?.id || 0;
        hls.audioTrack = track;
      });
    }
  }, [link, locale]);

  useEffect(() => {
    document.addEventListener("mousemove", handleVideoMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleVideoMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={playerWrapRef}
        className="flex flex-grow justify-center "
      >
        <div
          className={`video-player overflow-hidden max-w-[486px] max-h-[80dvh] lg:max-h-full ${
            (!isActive && isPlaying) || (isIdle && isPlaying) || !isStarted
              ? "inactive"
              : ""
          }`}
          ref={playerRef}
        >
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onMouseDown={togglePlay}
            onEnded={togglePlay}
            className="h-full lg:h-auto"
            onWaiting={() => setLoading(true)}
            onPlaying={() => setLoading(false)}
            onLoadedData={() => setLoading(false)}
          />

          <div className="controls pt-[10px] pb-[6px] px-4 lg:px-0">
            {!isLoading && (
              <>
                <div
                  className="progress-container absolute  w-full left-0 top-[-4px] bg-white/50"
                  ref={progressBarRef}
                  onClick={handleProgressClick}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setIsSeeking(true);
                  }}
                >
                  <div
                    className="progress-bar bg-white"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                  <div
                    className="progress-thumb"
                    style={{
                      left: `${progress}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between w-full items-center">
                  <button onClick={togglePlay}>
                    <Icon
                      url={`/icons/${isPlaying ? "pause" : "play"}.svg`}
                      alt="Volume"
                    />
                  </button>

                  <span className="text-[12px] font-[600]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="relative volume-control flex items-center">
                      <button
                        onClick={() => {
                          const newMuted = !isMuted;
                          setIsMuted(newMuted);
                          if (videoRef.current) {
                            videoRef.current.muted = newMuted;
                          }
                        }}
                      >
                        <Icon
                          url={`/icons/${isMuted ? "muted" : "volume"}.svg`}
                          alt="Volume"
                        />
                      </button>

                      <div className="p-5 bg-black/70 h-[150px] absolute left-1/2 translate-x-[-50%] bottom-[30px] volume-slider">
                        <Slider
                          orientation="vertical"
                          value={[isMuted ? 0 : volume * 100]}
                          max={100}
                          step={1}
                          className="min-h-[100px]"
                          onValueChange={handleVolumeChange}
                        />
                      </div>
                    </div>
                    <button onClick={toggleFullscreen}>
                      <Icon
                        url={`/icons/full${isFullScreen ? "-exit" : ""}.svg`}
                        alt="Fullscreen"
                      />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {!isPlaying && !isLoading && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full size-10 bg-black/60 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <Icon url="/icons/play.svg" alt="Play" />
            </div>
          )}

          {isLoading && (
            <Loader2Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin text-white w-[35px] h-[35px]" />
          )}

          {isFullScreen && (
            <button
              className="absolute bottom-[60px] right-4"
              onClick={() => setShowEpisodes(true)}
            >
              <Icon url="/icons/list.svg" />
            </button>
          )}

          {isFullScreen && (
            <div
              className={cn(
                "absolute left-0 w-full bg-grey px-4 py-6",
                isShowEpisodes ? "bottom-0" : "bottom-[-550px]"
              )}
              style={{
                borderRadius: "20px 20px 0 0",
                transition: "bottom .4s ease-in-out",
              }}
            >
              <div className="flex items-start justify-between gap-5 mb-4">
                <h3 className="text-[16px] leading-[140%]">
                  {meta.l10n[locale].name}
                </h3>

                <button
                  className="cursor-pointer"
                  onClick={() => setShowEpisodes(false)}
                >
                  <Icon url="/icons/close.svg" />
                </button>
              </div>

              <Button
                className="h-[48px] rounded-[28px] w-full mb-6"
                onClick={() => {
                  setShowEpisodes(false);
                  toggleFullscreen();

                  setTimeout(() => {
                    scrollTo("app");
                  }, 100);
                }}
              >
                <span>Download app</span>
              </Button>

              <Episodes
                data={data}
                onEpisodeClick={(link?: string) => {
                  if (link) {
                    setLoading(true);
                    togglePlay();
                    setLink(link);
                    return;
                  }

                  setShowEpisodes(false);
                  toggleFullscreen();

                  setTimeout(() => {
                    scrollTo("app");
                  }, 100);
                }}
              />
            </div>
          )}
        </div>
      </motion.div>

      <Info
        data={data}
        meta={meta}
        isPlaying={isPlaying}
        count={count}
        locale={locale}
        onEpisodeClick={(link?: string) => {
          if (link) {
            setLoading(true);
            togglePlay();
            setLink(link);
            return;
          }

          scrollTo("app");
        }}
      />
    </>
  );
};

export default VideoPlayer;

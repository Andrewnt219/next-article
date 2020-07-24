import { Link } from "@components/navigation/Link";
import { SearchResource } from "@src/@types/youtubeApi";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import styled from "styled-components";
import NextLink from "next/link";

type Props = {
  video: SearchResource;
};

function VideoThumbnail({ video }: Props): ReactElement {
  const { snippet } = video;
  const { asPath } = useRouter();

  return (
    <Container>
      <VideoTitle>
        <Link href={`${asPath}/${video.id.videoId}`}>{snippet.title}</Link>
      </VideoTitle>
      <Video
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={snippet.title}
      />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type VideoProps = {};
const Video = styled.iframe<VideoProps>``;

type VideoTitleProps = {};
const VideoTitle = styled.h3<VideoTitleProps>``;

type ChannelNameProps = {};
const ChannelName = styled.p<ChannelNameProps>``;

type VideoAgeProps = {};
const VideoAge = styled.p<VideoAgeProps>``;

export { VideoThumbnail };

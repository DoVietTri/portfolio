"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineElementProps extends VerticalTimelineElementProps {
  key?: string;
  children?: React.ReactNode;
}

export const TimelineElement: React.FC<TimelineElementProps> = ({
  children,
  ...props
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element" key={props.key}>
      <VerticalTimelineElement {...props} visible={inView}>
        {children}
      </VerticalTimelineElement>
    </div>
  );
};

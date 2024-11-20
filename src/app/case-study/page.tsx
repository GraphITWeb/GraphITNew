'use client'
import './case-study.css'
import Main from "@/components/Main/Main";
import Case from '../../assets/Case.png'
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <div className="case__study">
            <Main subText={'Case study • 8 min read'}
                  header="Сomprehensive Platform Development for Major Telecom Company in the USA"
                  description={'Public safety & justice case study'}/>
            <Image src={Case} alt="Case"/>
            <div className="case__study__text">
                <h4>Key Outcomes
                </h4>
                <div className="case__study__text__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <p>
                        Enabled Spirent to attract and retain high-profile clients such as Disney and Netflix,
                        resulting in millions of dollars in additional revenue.
                    </p>
                </div>
                <div className="case__study__text__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <p>
                        Achieved real-time processing of over 500,000 events per second with latency under 3
                        seconds, exceeding industry performance benchmarks.
                    </p>
                </div>
                <div className="case__study__text__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <p>
                        Delivered a cloud-agnostic solution, providing deployment flexibility and avoiding vendor
                        lock-in, allowing seamless integration with client infrastructures.
                    </p>
                </div>
                <div className="case__study__text__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <p>
                        Improved network reliability and real-time insights, enhancing decision-making and ensuring
                        a consistent, high-quality user experience.
                    </p>
                </div>
                <div className="case__study__text__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <p>
                        Created a scalable, fault-tolerant platform that supported millions of users without
                        interruptions, solidifying Spirent&#39;s industry leadership.
                    </p>
                </div>
                <h4>Context</h4>
                <p>Spirent, a major American telecom company, sought to revolutionize its network management
                    capabilities with a comprehensive platform designed to detect vulnerabilities, optimize latency, and
                    ensure high-performance delivery for streaming service giants such as Disney, Netflix, and other
                    similar providers. The project required a cloud-agnostic, real-time data processing solution capable
                    of integrating seamlessly with a mobile application, achieving stringent performance standards with
                    minimal latency. This flagship solution designed by Graphit team members played a critical role in
                    helping Spirent secure and retain high-profile clients, establishing a new revenue stream for the
                    company.
                </p>
                <h4>Challenge</h4>
                <p>
                    The challenge was both complex and multifaceted, encompassing business, technical, and operational
                    needs. From a business perspective, Spirent needed to differentiate itself to attract and retain
                    high-profile clients like Disney and Netflix by delivering an exceptional end-user experience. This
                    required flawless network performance, real-time issue detection, and near-zero latency to support
                    the data demands of their clients. Any disruption could impact customer satisfaction, causing
                    potential revenue losses and vast sunk costs, making the stakes particularly high.
                    <br/> <br/>From a technological perspective, the solution needed to be cloud-agnostic to provide
                    flexibility in deployments and prevent vendor lock-in. The platform had to handle enormous data
                    volumes, processing over 500,000 events per second while maintaining less than 3 seconds of latency.
                    Ensuring the system’s scalability, fault tolerance, and reliability while processing such
                    high-throughput data was a key challenge.
                    <br/> <br/> We also had to integrate diverse data sources, including NoSQL databases and a
                    Kubernetes-hosted time-series database, to support real-time analytics. These technologies had to
                    work together seamlessly, providing timely insights and enabling rapid decision-making. Meeting the
                    Service Level Agreements (SLAs) of major clients added additional pressure, as even the smallest
                    downtime could affect client relations and revenue. The project required careful stakeholder
                    collaboration and rigorous testing to ensure the platform aligned perfectly with Spirent&#39;s
                    business
                    goals while addressing their technological demands.

                </p>
                <h4>Our Approach</h4>
                <p>
                    Discovery phase is a critical first step in our approach to solving complex challenges on the
                    cross-section of business and technology. During this stage, direct interaction with stakeholders
                    were made to clearly define their needs and consequently identify the platform architecture. The
                    design incorporated high-performance, scalable microservices architecture leveraging Apache Spark
                    Streaming for real-time processing and Apache Kafka for event streaming. This architecture was
                    designed to handle high throughput and complex data flows efficiently, ensuring that all incoming
                    data could be processed with minimal latency.
                    <br/> <br/> To support real-time analytics, we incorporated NoSQL databases, enhancing the
                    platform’s ability to manage diverse data sources and provide timely insights. A time-series
                    database was hosted on Kubernetes to ensure efficient management and scalability of real-time data,
                    which was critical for supporting millions of data points generated every second.
                    <br/> <br/> The cloud-agnostic aspect of the platform was ensured by designing compatibility with
                    all major cloud providers. This allowed Spirent the freedom to deploy on any preferred cloud
                    service, maximizing flexibility and reducing vendor lock-in risk. We optimized data flow between
                    Spark Streaming services and the time-series database, ensuring maximum latency of under 3 seconds,
                    which was a critical requirement for our client’s performance thresholds.
                    <br/> <br/> Rigorous unit and integration testing throughout the development process ensured that
                    the platform met Spirent’s reliability and performance expectations. Weekly demos with stakeholders
                    ensured alignment with business requirements, and continuous feedback allowed us to refine the
                    solution to exceed expectations.

                </p>
                <div className="case__study__impact">
                    <h4>Impact</h4>
                    <p>
                        Our solution enabled Spirent to achieve critical performance thresholds, processing over 500,000
                        events per second with less than 3 seconds latency. This allowed Spirent to attract and retain
                        major clients like Disney and Netflix, directly contributing to establishing a new revenue
                        recurring stream. The platform&#39;s real-time insights improved decision-making, streamlined
                        network interactions, and ensured consistent service quality. Its cloud-agnostic design provided
                        deployment flexibility, resonating with high-value clients and enhancing Spirent&#39;s position
                        as
                        an industry leader.
                    </p>
                </div>
                <h4></h4>
                <p></p>
                <h4></h4>
                <p></p>
            </div>
        </div>
    )
}
import React,  { useCallback, useEffect, useState } from "react";
import styles from "./Feedback.module.css";
import feedbacks from '../data/APIfeedback';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { IconName } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'


export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi); // Set initial state
    emblaApi.on('reInit', onSelect).on('select', onSelect); // Listen for changes
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};
////////////////////


export default function Feedback() {
  // Define Embla Carousel options
    const emblaOptions = {
      loop: true, // Example option: make the carousel loop
      align: 'start', // Start slides at the beginning of the viewport
      // Add other options as needed, e.g., slidesToScroll: 1, dragFree: false
    };

    // Initialize Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

    // Use the custom hook for previous/next button logic
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <div className={styles.feedbackLayout}>
          <h2>Feedback</h2>
          <div className={styles.feedbackArea}>
            <div className={styles.textArea}>
              <h3>Opinions</h3>
              <p>We’re Little Lemon - We love hearing from our guests and growing with your feedback.</p>
            </div>
            <Link
              to="/reviews"
              className={styles.reviewsLink}>
              <button>Reviews</button>
            </Link>
          </div>
          {/* --- NEW EMBLA CAROUSEL STRUCTURE START --- */}
          <div className={styles.embla}> {/* Main Embla container */}
            <div className={styles.emblaViewport} ref={emblaRef}> {/* Viewport with ref */}
              <div className={styles.emblaContainer}> {/* Container for slides */}
                {feedbacks.map(feedback => (
                  // Each feedback card becomes an Embla slide
                  <div key={feedback.id} className={styles.emblaSlide}>
                    <div className={styles.feedbackCard}> {}
                      <div className={styles.feedbackHead}>
                        <div className={styles.feedbackImageContainer}>
                          <img src={feedback.avatar} alt={feedback.name} className={styles.feedbackImage} />
                        </div>
                        <div className={styles.feedbackNameDate}>
                          <p>{feedback.name}</p>
                          <p>{feedback.date}</p>
                        </div>
                      </div>
                      <div className={styles.starContainer}>
                        {Array.from({ length: feedback.star }).map((_, index) => (
                          <FaStar key={index} className={styles.starIcon} />
                        ))}
                      </div>
                      <div className = {styles.feedbackText}>
                        <p className = {styles.quoteText}>" {feedback.quote} "</p>
                        <p className={styles.feedbackDescription}>{feedback.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Carousel navigation buttons */}
          <div className={styles.buttonsGroup}> {}
              <button
                className={styles.BTN}
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              >
                <GoChevronLeft className={styles.leftrightBTN}/>
              </button>
              <button
                className={styles.BTN}
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              >
                <GoChevronRight className={styles.leftrightBTN}/>
              </button>
            </div>
          {}
        </div>
    )
};
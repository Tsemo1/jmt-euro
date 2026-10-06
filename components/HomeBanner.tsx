"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { banner_1, banner_2, banner_3 } from "@/images";

const banners = [
  {
    image: banner_1,
    offer: "Limited Time Offer 30% Off",
    title: (
      <>
        Experience Pure Sound -
        <br className="hidden sm:block" />
        Your Perfect Headphones
        <br className="hidden sm:block" />
        Awaits!
      </>
    ),
  },
  {
    image: banner_2,
    offer: "C'est le moment de profiter de 30% de réduction",
    title: (
      <>
        Experience Pure Sound -
        <br className="hidden sm:block" />
        Your Perfect Headphones
        <br className="hidden sm:block" />
        Awaits!
      </>
    ),
  },
  {
    image: banner_3,
    offer: "Avec JMT Euro, profitez de 30% de réduction sur vos achats",
    title: (
      <>
        Experience Pure Sound -
        <br className="hidden sm:block" />
        Your Perfect Headphones
        <br className="hidden sm:block" />
        Awaits!
      </>
    ),
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  /*
   * Change automatiquement de banner
   * toutes les 4 secondes.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const banner = banners[current];

  return (
    <section className="w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-lg
          bg-shop_light_pink
          min-h-[500px]
          sm:min-h-[420px]
          md:min-h-[340px]
          lg:min-h-[360px]
          px-6
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
          flex
          items-center
        "
      >
        {/* =========================
            TEXTE
        ========================== */}
        <div
          key={`text-${current}`}
          className="
            relative
            z-10
            w-full
            md:w-[58%]
            lg:w-[60%]
            space-y-4
            sm:space-y-5
            md:space-y-6
            animate-fadeIn
          "
        >
          {/* Offre */}
          <p
            className="
              text-shop_orange
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-medium
            "
          >
            {banner.offer}
          </p>

          {/* Titre */}
          <h2
            className="
              text-shop_dark_green
              text-3xl
              sm:text-4xl
              md:text-4xl
              lg:text-5xl
              xl:text-[52px]
              font-bold
              leading-[1.1]
              tracking-tight
            "
          >
            {banner.title}
          </h2>

          {/* Bouton */}
          <div className="pt-1 sm:pt-2">
            <Link
              href="/shop"
              className="
                inline-flex
                items-center
                justify-center
                bg-shop_orange
                text-white
                px-6
                sm:px-7
                md:px-8
                py-2.5
                sm:py-3
                rounded-full
                text-sm
                sm:text-base
                font-semibold
                hover:bg-shop_dark_green
                transition-colors
                duration-300
              "
            >
              Buy now
            </Link>
          </div>
        </div>

        {/* =========================
            IMAGE
        ========================== */}
        <div
          key={`image-${current}`}
          className="
            absolute
            z-0
            bottom-2
            right-1/2
            translate-x-1/2

            sm:right-4
            sm:translate-x-0
            sm:bottom-4

            md:right-4
            md:top-1/2
            md:bottom-auto
            md:-translate-y-1/2

            lg:right-8
            xl:right-14

            animate-fadeIn
          "
        >
          <Image
            src={banner.image}
            alt={`Banner ${current + 1}`}
            width={500}
            height={500}
            priority={current === 0}
            className="
              w-[190px]
              sm:w-[230px]
              md:w-[280px]
              lg:w-[350px]
              xl:w-[430px]
              h-auto
              object-contain
            "
          />
        </div>
      </div>

      {/* =========================
          INDICATEURS
      ========================== */}
      <div className="flex justify-center items-center gap-2.5 mt-4 sm:mt-5">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Afficher le banner ${index + 1}`}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                current === index
                  ? "w-3 h-3 bg-shop_orange"
                  : "w-3 h-3 bg-gray-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
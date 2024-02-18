import React from "react";
import Link from "next/link";
import Image from "next/image";

const heroContent = {
  text: {
    subheading: "Welcome To School.",
    heading: "SMK Al-Amien Kota Kediri",
    description:
      "SMK Al-Amien adalah lembaga pendidikan menengah kejuruan yang bernaung dibawah naungan pondok Pesantren AL Amien yang terletak di Kota Kediri. Dikenal sebagai sekolah yang berkomitmen tinggi terhadap pendidikan dan pembinaan karakter, menawarkan berbagai program keahlian yang relevan dengan tuntutan pasar kerja. Fasilitas modern dan didukung oleh tenaga pendidik yang berkualitas, sekolah ini membekali siswa dengan keterampilan praktis dan pengetahuan mendalam dalam bidang masing-masing.",
  },
  images: {
    img1: "/images/ImageHero-Img1.jpg",
    img2: "/images/ImageHero-Img2.jpg",
    img3: "/images/ImageHero-Img3.jpg",
    img4: "/images/ImageHero-Img4.jpg",
    img5: "/images/ImageHero-Img5.jpg",
  },
};

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0 font-bodyFont">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-primary font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-secondary before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-7">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p className="leading-relaxed font-medium text-primary mb-10">
                {heroContent.text.description}
              </p>
            )}
          </div>

          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="img-smkalamien"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="img-smkalamien"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="bg-secondary rounded-2xl rounded-tr-[200px]"></div>
                </div>

                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="img-smkalamien"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              {/* <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary rounded-2xl rounded-bl-[200px]"></div>
                {heroContent.images.img4 && (
                  <div>
                    <Image
                      src={heroContent.images.img4}
                      width={437}
                      height={437}
                      alt="img-smkalamien"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                )}
              </div> */}
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-primary rounded-2xl rounded-bl-[200px]"></div>
                  {heroContent.images.img4 && (
                    <div>
                      <Image
                        src={heroContent.images.img4}
                        width={394}
                        height={394}
                        alt="img-smkalamien"
                        className="object-cover h-full w-full rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-5/12">
                <div className="grid gap-2">
                  {heroContent.images.img5 && (
                    <Image
                      src={heroContent.images.img5}
                      width={446}
                      height={495}
                      alt="img-smkalamien"
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

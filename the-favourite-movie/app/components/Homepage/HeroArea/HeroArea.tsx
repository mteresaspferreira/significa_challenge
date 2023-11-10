import { CTA } from "./CTA/CTA";
import { Gradient } from "./Gradient/Gradient";
import { Mosaic } from "./Mosaic/Mosaic";
import { SquarePattern } from "./SquarePattern/SquarePattern";
import { Text } from "./Text/Text";

export default function HeroArea() {
  return (
    <div className="bg-white">
      <section>
        <div className="relative isolate">
          <SquarePattern />
          <Gradient />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <Text />
                  <CTA />
                </div>
                <Mosaic />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import heroImg from "../../assets/images/RSE.JPG";
import HeroStats from "./HeroStats";

function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rotate-3 rounded-3xl border border-rse-gold/50"
      />
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/30">
        <img
          src={heroImg}
          alt="Reverse osmosis water purifier installed beneath a kitchen sink"
          className="aspect-video w-full rounded-2xl object-cover"
        />
      </div>

      <HeroStats />
    </div>
  );
}

export default HeroImage;

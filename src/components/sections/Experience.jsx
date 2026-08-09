import { timeline } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-ivory-dim py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />

        <div className="max-w-2xl">
          {timeline.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

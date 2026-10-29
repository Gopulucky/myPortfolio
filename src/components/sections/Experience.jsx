import { timeline } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-layout">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />

        <div className="experience-list">
          {timeline.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

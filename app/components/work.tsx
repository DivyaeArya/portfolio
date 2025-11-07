import WorkItem from "./workIten";

function WorkSection() {
  // Placeholder project data
  const projects = [
  {
    title: "Real-time ICU Event Monitoring",
    description: "Developed a real-time ICU monitoring system using YOLOv8 to track patient events. Engineered an incremental learning pipeline with an autonomous Qwen-based annotation system. Also integrated Qwen-powered OCR with PTZ cameras to capture and display vital data from monitors.",
    imageUrl: "https://placehold.co/600x400/334155/FFF?text=ICU+AI+Monitoring",
    bullets: ["Computer Vision", "YOLOv8", "LLM Integration (Qwen)", "Incremental Learning", "OCR"],
    link: "#project-icu"
  },
  {
    title: "Satellite Image Segmentation & Classification",
    description: "Research project for building segmentation from the xBD dataset using U-Net and Swin Transformers, and subsequent classification of disaster damage using a position-constrained differential attention-based siamese network.",
    imageUrl: "disasterexample.ppm",
    bullets: ["Research", "Computer Vision", "U-Net", "Swin Transformers", "Attention Mechanisms"],
    link: "#project-satellite"
  },
  {
    title: "SpeakPortrait: Generative AI Video",
    description: "Developed an end-to-end pipeline by integrating the Zonos-v0.1 TTS model (zero-shot voice cloning) with the SadTalker facial animation core to generate realistic, audio-driven talking head videos from text and a single image.",
    imageUrl: "https://placehold.co/600x400/555/FFF?text=Generative+AI+Video",
    bullets: ["Generative AI", "TTS (Zonos-v0.1)", "Facial Animation (SadTalker)", "AI Pipeline"],
    link: "#project-speakportrait"
  },
  {
    title: "Financial: Analysis LLM Agent",
    description: "Built a stock analysis tool with an agentic workflow to automate technical, fundamental, and sentimental analysis. Integrated LLM reasoning with ARIMA and GARCH models for time series forecasting and investment recommendations.",
    imageUrl: "https://placehold.co/600x400/666/FFF?text=Fintech+LLM+Agent",
    bullets: ["Fintech", "LLM Agents", "Agentic Workflows", "Time Series (ARIMA/GARCH)"],
    link: "#project-financial-agent"
  }
];

  return (
    <section id="work" className="container mx-auto max-w-7xl px-6 py-4">
        <hr className="border-t border-gray-700 my-8" />

      <h2 className="text-5xl font-bold text-white mb-12">Work</h2>
      
      {/* Grid for Work Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <WorkItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
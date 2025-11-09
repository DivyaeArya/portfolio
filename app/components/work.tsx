import WorkItem from "./workIten";

function WorkSection() {
  // Placeholder project data
  const projects = [
  {
    title: "Real-time ICU Event Monitoring",
    description: "Developed a real-time ICU monitoring system using YOLOv8 to track patient events. Engineered an incremental learning pipeline with an autonomous Qwen-based annotation system. Also integrated Qwen-powered OCR with PTZ cameras to capture and display vital data from monitors.",
    imageUrl: "icu.jpg",
    bullets: ["Computer Vision", "YOLOv8, Qwen-VLM", "Incremental Learning (FIM)", "OCR"],
    link: "#project-icu"
  },
  {
    title: "Satellite Image Segmentation & Classification",
    description: "Research project for building segmentation from the xBD dataset using U-Net and Swin Transformers, and subsequent classification of disaster damage using a position-constrained differential attention-based siamese network.",
    imageUrl: "disasterexample.ppm",
    bullets: ["Research", "Computer Vision", "Swin U-Net", "Attention Mechanisms"],
    link: "#project-satellite"
  },
  {
    title: "SpeakPortrait: Generative AI Video",
    description: "Developed an end-to-end pipeline by integrating the Zonos-v0.1 TTS model (zero-shot voice cloning) with the SadTalker facial animation core to generate realistic, audio-driven talking head videos from text and a single image.",
    imageUrl: "talkinghead.png",
    bullets: ["Generative AI", "TTS (Zonos-v0.1)", "Facial Animation (3D Morph Model)", "Pipelining"],
    link: "#project-speakportrait"
  },
  {
    title: "Financial: Analysis LLM Agent",
    description: "Built a stock analysis tool with an agentic workflow to automate technical, fundamental, and sentimental analysis. Integrated LLM reasoning with ARIMA and GARCH models for time series forecasting and investment recommendations.",
    imageUrl: "monte.png",
    bullets: ["Fintech", "LLM Agents", "Agentic Workflows", "Time Series (ARIMA/GARCH)"],
    link: "#project-financial-agent"
  }
];

  return (
    <section id="work" className="container mx-auto max-w-7xl px-6 py-4">
        <hr className="border-t border-gray-700 my-8" />
      <h2 className="text-5xl font-bold text-white mb-12"><span className="text-green-400">02</span> / Work</h2>
      
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
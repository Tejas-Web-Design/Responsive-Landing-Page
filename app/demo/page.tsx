export default function DemoPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">TaskFlow Demo</h1>

      {/* Video */}
      <video controls className="w-full max-w-4xl rounded shadow">
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* PPT Download */}
      <a
        href="/task-flow.pptx"
        download
        className="inline-block mt-6 p-3 px-5 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
      >
        Download PPT
      </a>
    </div>
  );
}

export default function LoadingVideos({ loadedCount, total }) {
  const progress = Math.round((loadedCount / total) * 100);

  return (
    <div className="flex flex-col justify-center items-center h-64">
      {/* Points animés */}
      <div className="flex space-x-2 mb-4">
        <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 rounded-full bg-amber-300 animate-bounce [animation-delay:0.4s]"></div>
      </div>

      <p className="text-lg font-semibold text-amber-500">
        Chargement... {progress}%
      </p>
      <p className="text-sm text-amber-400 mt-1">
        {loadedCount} / {total} vidéos
      </p>
    </div>
  );
}

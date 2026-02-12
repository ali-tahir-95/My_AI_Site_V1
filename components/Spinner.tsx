export default function Spinner({ size = 32 }: { size?: number }) {
    return (
      <div className="flex items-center justify-center">
        <div
          style={{ width: size, height: size }}
          className="border-4 border-white/10 border-t-brand rounded-full animate-spin"
        />
      </div>
    );
  }
  
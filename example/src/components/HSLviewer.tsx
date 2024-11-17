export function ViewHSLColors() {
  const hslRange = Array.from({ length: 360 }, (_, index) => index);
  return (
    <ul className="flex flex-wrap gap-px">
      {hslRange.map((hue) => {
        const hslColor = `hsl(${hue}, 100%, 50%)`;
        return (
          <div
            key={hue}
            style={{ backgroundColor: hslColor }}
            className="size-20 flex justify-center items-center"
          >
            <div className="bg-base-200 p-1 rounded-lg">
            {hue}

            </div>
          </div>
        );
      })}
    </ul>
  );
}

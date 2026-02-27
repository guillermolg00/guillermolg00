import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Guillermo Lopez Gomez";

  return new ImageResponse(
    <div tw="flex flex-col w-full h-full items-center justify-center bg-black">
      <div tw="flex flex-col w-full py-12 px-4 items-center justify-center p-8">
        <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-center text-white">
          {title}
        </h2>
        <p tw="text-xl text-gray-400 mt-4">CTO & Software Engineer</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

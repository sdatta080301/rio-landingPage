import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "black",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: -1,
            marginTop: 2,
          }}
        >
          r
        </span>
        <span
          style={{
            color: "#c4f441",
            fontSize: 28,
            fontWeight: 800,
            marginTop: -10,
            marginLeft: -1,
          }}
        >
          .
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}

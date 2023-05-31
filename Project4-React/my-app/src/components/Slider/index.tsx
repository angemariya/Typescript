/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Button = (props: { name: string }) => (
  <button
    style={{
      height: "300px",
      width: "50px",
      fontSize: "40px",
      backgroundColor: "rgba(0,0,0,0.5)",
      border: "none",
      outline: "none",
      cursor: "pointer",
    }}
  >
    {props.name}
  </button>
);

const Container = (props: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      width: "800px",
      maxWidth: "800px",
      gap: "20px",
    }}
  >
    {props.children}
  </div>
);

const Wrapper = (props: { children: React.ReactNode }) => (
  <div
    style={{
      overflow: "hidden",
      width: "640px",
    }}
  >
    {props.children}
  </div>
);

export const Slider = (props: { images: string[]; page: number }) => (
  <Container>
    <Button name="<" />
    <Wrapper>
      <div
        style={{
          display: "flex",
          transform: `translateX(${props.page * -660}px)`,
          gap: "20px",
        }}
      >
        {props.images.map((el) => (
          <img src={el} />
        ))}
      </div>
    </Wrapper>
    <Button name=">" />
  </Container>
);

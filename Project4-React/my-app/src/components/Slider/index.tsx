/* eslint-disable jsx-a11y/alt-text */
import { Button } from "../Button";
import { Container } from "../Container";
import { Wrapper } from "../Wrapper";


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

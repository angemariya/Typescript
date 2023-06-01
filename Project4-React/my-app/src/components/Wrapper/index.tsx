export const Wrapper = (props: { children: React.ReactNode }) => (
    <div
      style={{
        overflow: "hidden",
        width: "640px",
      }}
    >
      {props.children}
    </div>
);
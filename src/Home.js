import Panel, { PanelWrapper, PanelFlx } from "./components/panel";
function Home() {
  return (
    <div className="main">
      <div className="information-wrap">
        <div className="information__thumb">사진</div>
        <div className="information__desc">이름, 나이, 주소, 년차, 취미</div>
      </div>
      <hr />
      <div className="skill-wrap">
        <PanelWrapper>
          {/* <Panel width={300} height={500}>
            <div>asd</div>
          </Panel>
          <Panel>
            <div>asd</div>
          </Panel> */}
          <PanelFlx>1</PanelFlx>
          <PanelFlx flex={0.5}>2</PanelFlx>
          <PanelFlx flex={0.5}>3</PanelFlx>
          <PanelFlx>4</PanelFlx>
          <PanelFlx>5</PanelFlx>
          <PanelFlx>6</PanelFlx>
        </PanelWrapper>
      </div>
      <hr />
    </div>
  );
}

export default Home;

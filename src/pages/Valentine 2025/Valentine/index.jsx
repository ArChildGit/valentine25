import { useLocation } from "react-router-dom";
import { Col, Row, Typography, Card, Table, Layout, Menu, Input, Space, Grid, Divider, Button } from "antd";
import { AudioOutlined, BorderOuterOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import StatCard from "../../../components/misc/StatCard";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import { Midi } from "@tonejs/midi";
import * as Tone from "tone";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../../../providers/AudioContextProvider";

// -- Search Bar utils --
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />
// );
const onSearch = (value, _e, info) => console.log(info?.source, value);

// -- Cards utils --
const { Meta } = Card;

//Misc Layout & Typografi
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const { Header, Sider, Content, Footer } = Layout;

const Valentine = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const screens = useBreakpoint();

  const [index, setIndex] = useState(0);
  const { playAudio, pauseAudio, isPlaying } = useAudio();

  const handleNext = () => {
    setIndex((prevIndex) => {

      if (index === 0) { playAudio(); }

      if (prevIndex + 1 === dataSource.length) {
        navigate("/willYouBeMyValentine");
        return prevIndex; // Keep the index unchanged since navigation happens
      }
      return prevIndex + 1;
    });
  };

  const navigate = useNavigate();

  // const playMidi = async () => {
  //   await Tone.start(); // Required for playback in modern browsers
  //   const midi = await fetch(`src/assets/midi/yung_kai_blue.mid`).then((res) => res.arrayBuffer());
  //   const midiData = new Uint8Array(midi);
  //   const midiBuffer = await Tone.Midi.fromArrayBuffer(midiData);

  //   const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  //   midiBuffer.tracks.forEach((track) => {
  //     track.notes.forEach((note) => {
  //       synth.triggerAttackRelease(note.name, note.duration, note.time);
  //     });
  //   });
  // };

  // const playMidi = async () => {
  //   await Tone.start(); // Ensure Web Audio is started
  //   const response = await fetch(`src/assets/midi/yung_kai_blue.mid`);
  //   const arrayBuffer = await response.arrayBuffer();
  //   const midi = new Midi(arrayBuffer); // Use Midi from @tonejs/midi

  //   const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  //   midi.tracks.forEach((track) => {
  //     track.notes.forEach((note) => {
  //       synth.triggerAttackRelease(note.name, note.duration, note.time);
  //     });
  //   });

  //   setMidiData(midi);
  // };

  return (
    <div
      className="layout-content"
      style={{
        backgroundImage: "url('src/assets/images/misc/valentine2025/background-valentine.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: 20,
      }}>
      <Row gutter={16} style={{ minHeight: "100vh", padding: 20 }}>
        <Col span={12}>
          <Card style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 700,
            background: "rgba(255,255,255,0)",
            border: "none",
            boxShadow: "none",
          }}>
            <img style={{
              width: 500,
              borderRadius: 32,// Remove shadow
            }} alt="example" src={dataSource[index].image} />
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{
            background: "rgba(255,255,255,0)",
            border: "none", // Remove border
            boxShadow: "none",
          }}>
            <Title className="valentine-title" style={{ marginTop: 20 }}> Happy Valentine Sayang 💖 </Title>
            <Title className="valentine-title" style={{ marginBottom: 100 }} level={4} > 14/02/2025 </Title>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '400px', position: 'relative' }}>
              <Title className="valentine-title" level={3}>
                {dataSource[index].quotes}
              </Title>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                <Button
                  className="valentine-button"
                  onClick={() => {
                    handleNext();
                  }}
                >
                  💕 Next 💕
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div >
  );
};

export default Valentine;

const dataSource = [
  {
    key: "1",
    image: "src/assets/images/misc/valentine2025/highlights/highlights1.jpeg",
    quotes: "Trimakasih ya manis. Kamu adalah valentine pertamaku dalam hidup dengan status yang jelas. 🌸 \"Bunga bunga kotak kotak\" kan ya? semoga bener.",
  },
  {
    key: "2",
    image: "src/assets/images/misc/valentine2025/highlights/highlights2.jpeg",
    quotes: "Thank you for being such an amazing partner. Being with you feels so comfortable, fun, and full of little moments that make me happy. I’m grateful for everything we share, and I hope we keep supporting each other, laughing together, and growing side by side. I just want to take a moment to say thank you for being such a wonderful partner. You make my days brighter, my worries lighter, and my heart fuller. I love how we can be silly together, support each other, and make the simplest moments feel special. Im so lucky to have you, and I cant wait to create more beautiful memories with y 💕😊",
  },
  {
    key: "3",
    image: "src/assets/images/misc/valentine2025/highlights/highlights3.jpeg",
    quotes: "I just want to take a moment to say sorry for all my shortcomings and for any mistakes I’ve made. I know I’m not perfect, but I truly appreciate your patience, understanding, and love. Thank you for always being there, for making me smile, and for being such an amazing partner. I’ll always do my best to make you happy and cherish every moment we share. Here’s to us—today and always! Love you so much! 💕😊",
  },
];

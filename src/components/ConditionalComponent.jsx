import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditonalComponent() {
  const display = false;
  return display ? <Welcome /> : <Code />;
}

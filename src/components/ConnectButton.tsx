import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";

function ConnectButton() {
  return (
    <div className="flex items-stretch">
      <div className="items-start">
        <RainbowConnectButton />
      </div>
    </div>
  );
}

export default ConnectButton;

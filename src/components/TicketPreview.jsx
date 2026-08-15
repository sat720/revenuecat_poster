import React from "react";

const TicketPreview = ({ ticketUrl, onReset }) => {
  const shareText = `🚀 Excited to attend the Qwen Workspace Community!

Looking forward to connecting, learning, collaborating and networking with the amazing Qwen community.

#QwenWorkspace
#AI
#Qwen
#Community
#Hyderabad
#DevX`;

  const handleDownload = async () => {
    try {
      const response = await fetch(ticketUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Qwen_Workspace_Attendee_Pass.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error(err);
      alert("Unable to download the attendee pass.");
    }
  };

  const handleLinkedInShare = async () => {
    try {
      // 1. Download pass image
      await handleDownload();

      // 2. Copy text caption to clipboard
      await navigator.clipboard.writeText(shareText);

      // 3. Alert user: text is pre-filled/copied, attach downloaded image
      alert(`✅ Attendee pass downloaded!
✅ Caption copied to clipboard!

LinkedIn is opening with your post text pre-filled. Simply upload the downloaded attendee pass image and post!`);

      // 4. Open LinkedIn in post-creation mode
      const linkedInPostUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
        shareText
      )}`;

      window.open(linkedInPostUrl, "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInstagramShare = async () => {
    try {
      // 1. Download pass image
      await handleDownload();

      // 2. Copy text caption to clipboard
      await navigator.clipboard.writeText(shareText);

      // 3. Alert user: caption copied to paste when creating post + upload downloaded image
      alert(`✅ Attendee pass downloaded!
✅ Caption copied to clipboard!

Opening Instagram — simply create a new post, upload your downloaded pass image, and paste the copied caption!`);

      // 4. Open Instagram
      window.open("https://www.instagram.com/", "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  const handleTwitterShare = async () => {
    try {
      // 1. Download pass image
      await handleDownload();

      // 2. Copy text caption to clipboard
      await navigator.clipboard.writeText(shareText);

      // 3. Alert user: text is pre-filled/copied, attach downloaded image
      alert(`✅ Attendee pass downloaded!
✅ Caption copied to clipboard!

X (Twitter) is opening with your post text pre-filled. Simply attach your downloaded attendee pass image and post!`);

      // 4. Open Twitter/X direct post composition
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}`;

      window.open(twitterUrl, "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={ticketUrl}
        alt="Attendee Pass"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,.3)",
          marginBottom: "25px",
        }}
      />

      <div className="action-buttons">
        <button
          className="btn-secondary"
          onClick={handleDownload}
        >
          Download Pass
        </button>

        <button
          className="btn-primary"
          onClick={handleLinkedInShare}
        >
          LinkedIn
        </button>

        <button
          className="btn-primary"
          onClick={handleInstagramShare}
        >
          Instagram
        </button>

        <button
          className="btn-primary"
          onClick={handleTwitterShare}
        >
          Share on X
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "14px",
          background: "rgba(255,255,255,.08)",
        }}
      >
        <h3 style={{ color: "#7c5cff" }}>
          What's Next?
        </h3>

        <ul style={{ lineHeight: "2" }}>
          <li>Download your attendee pass.</li>
          <li>Share it on LinkedIn, Instagram or X.</li>
          <li>Tag the Qwen community.</li>
          <li>See you at the event! 🎉</li>
        </ul>
      </div>

      <button
        onClick={onReset}
        style={{
          marginTop: "25px",
          background: "transparent",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
        }}
      >
        ← Create Another Pass
      </button>
    </div>
  );
};

export default TicketPreview;

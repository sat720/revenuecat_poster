import React from "react";

const TicketPreview = ({ ticketUrl, onReset }) => {
  const shareText = `🔥 Beyond thrilled to announce that I'm attending Shipathon 2026! 🚀

Get ready for an epic day of building, shipping, and conquering with the amazing tech ecosystem powered by Kramers Community x RevenueCat! 💡⚡

📅 Date: Saturday, 22nd August 2026
⏰ Time: 1:45 PM – 6:00 PM (IST)
📍 Venue: DevX, Hyderabad

Can't wait to connect, collaborate, and innovate with fellow builders, developers, and tech enthusiasts! Who else is attending? Connect with me! 👇🎉

#Shipathon2026 #BuildShipConquer #KramersCommunity #RevenueCat #DevX #Hyderabad #TechCommunity #Hackathon #Developers`;

  // X / Twitter strict 280-character limit share text
  const twitterShareText = `🚀 Excited to attend Shipathon 2026! 

Building, shipping & conquering with Kramers Community x RevenueCat! 💡

📅 Sat, 22 Aug 2026 | 📍 DevX, Hyderabad

See you there! 🎉

#Shipathon2026 #BuildShipConquer #KramersCommunity #RevenueCat #DevX #Hyderabad`;

  const handleDownload = async () => {
    try {
      const response = await fetch(ticketUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Shipathon_2026_Attendee_Pass.png";
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
      await handleDownload();
      await navigator.clipboard.writeText(shareText);

      alert(`✅ Attendee pass downloaded!
✅ Caption copied to clipboard!

LinkedIn is opening with your post text pre-filled. Simply upload the downloaded attendee pass image and post!`);

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
      await handleDownload();
      await navigator.clipboard.writeText(shareText);

      alert(`✅ Attendee pass downloaded!
✅ Caption copied to clipboard!

Opening Instagram — simply create a new post, upload your downloaded pass image, and paste the copied caption!`);

      window.open("https://www.instagram.com/", "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  const handleTwitterShare = async () => {
    try {
      await handleDownload();
      await navigator.clipboard.writeText(twitterShareText);

      alert(`✅ Attendee pass downloaded!
✅ X (Twitter) caption copied to clipboard!

X is opening with your tweet text pre-filled. Simply attach your downloaded pass image and post!`);

      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        twitterShareText
      )}`;

      window.open(twitterUrl, "_blank");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert("✅ Caption text copied to clipboard!");
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

      {/* Caption Preview Box */}
      <div
        style={{
          marginTop: "25px",
          width: "100%",
          maxWidth: "500px",
          padding: "18px",
          borderRadius: "14px",
          background: "rgba(255,255,255,.05)",
          border: "1px solid rgba(255,255,255,.1)",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <h4 style={{ margin: 0, color: "#ff7700" }}>📝 Post Caption</h4>
          <button
            onClick={handleCopyCaption}
            style={{
              background: "rgba(255, 119, 0, 0.2)",
              border: "1px solid #ff7700",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Copy Text
          </button>
        </div>
        <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#e2e8f0", margin: 0, whiteSpace: "pre-line" }}>
          {shareText}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "14px",
          background: "rgba(255,255,255,.08)",
        }}
      >
        <h3 style={{ color: "#ff7700" }}>
          What's Next?
        </h3>

        <ul style={{ lineHeight: "2" }}>
          <li>Download your attendee pass.</li>
          <li>Share it on LinkedIn, Instagram or X.</li>
          <li>Tag Kramers Community & RevenueCat.</li>
          <li>See you at Shipathon 2026! 🎉</li>
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

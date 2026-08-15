/**
 * Ticket Generation Utility
 */

export const generateTicketCanvas = async (name, role, photoFile) => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Template
      const TEMPLATE_URL = "/template.png";

      // -------------------------
      // PHOTO WINDOW BOUNDS (Rocket screen)
      // -------------------------
      // -------------------------
// PHOTO POSITION
// -------------------------
      const PHOTO_X = 333;
      const PHOTO_Y = 490;
      const PHOTO_WIDTH = 324;
      const PHOTO_HEIGHT = 324;
      const CORNER_RADIUS = 28;


      // -------------------------
      // TEXT POSITIONS
      // -------------------------
      const NAME_X = 465;
      const NAME_Y = 910;

      const WORK_X = 465;
      const WORK_Y = 1020;

      const imgTemplate = new Image();
      const imgUser = new Image();

      imgTemplate.onload = () => {
        canvas.width = imgTemplate.width;
        canvas.height = imgTemplate.height;

        // Draw background template
        ctx.drawImage(imgTemplate, 0, 0);

        const reader = new FileReader();

        reader.onload = (event) => {
          imgUser.onload = () => {
            // -------------------------
            // Draw Uploaded Photo Inside Rocket Window
            // -------------------------
            ctx.save();

            ctx.beginPath();
            if (ctx.roundRect) {
              ctx.roundRect(
                PHOTO_X,
                PHOTO_Y,
                PHOTO_WIDTH,
                PHOTO_HEIGHT,
                CORNER_RADIUS
              );
            } else {
              ctx.rect(PHOTO_X, PHOTO_Y, PHOTO_WIDTH, PHOTO_HEIGHT);
            }

            ctx.clip();

            // Fit image aspect-ratio cover
            const scale = Math.max(
              PHOTO_WIDTH / imgUser.width,
              PHOTO_HEIGHT / imgUser.height
            );

            const drawWidth = imgUser.width * scale;
            const drawHeight = imgUser.height * scale;

            const drawX = PHOTO_X + (PHOTO_WIDTH - drawWidth) / 2;
            const drawY = PHOTO_Y + (PHOTO_HEIGHT - drawHeight) / 2;

            ctx.drawImage(
              imgUser,
              drawX,
              drawY,
              drawWidth,
              drawHeight
            );

            ctx.restore();

            // -------------------------
            // Draw Name (max 14 chars)
            // -------------------------
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";

            ctx.fillStyle = "#000000ff";
            ctx.font = "bold 28px 'Courier New', monospace, sans-serif";

            ctx.fillText(
              name.trim().slice(0, 14),
              NAME_X,
              NAME_Y
            );

            // -------------------------
            // Draw Work / Role (max 14 chars)
            // -------------------------
            if (role && role.trim() !== "") {
              ctx.fillStyle = "#000000";
              ctx.font = "bold 28px 'Courier New', monospace, sans-serif";

              ctx.fillText(
                role.trim().slice(0, 14),
                WORK_X,
                WORK_Y
              );
            }

            resolve(canvas.toDataURL("image/png"));
          };

          imgUser.onerror = () => {
            reject(new Error("Unable to load uploaded image."));
          };

          imgUser.src = event.target.result;
        };

        reader.onerror = () => {
          reject(new Error("Unable to read uploaded image."));
        };

        if (!(photoFile instanceof File)) {
          reject(new Error("Invalid image file."));
          return;
        }

        reader.readAsDataURL(photoFile);
      };

      imgTemplate.onerror = () => {
        reject(new Error("Template image not found."));
      };

      imgTemplate.src = TEMPLATE_URL;
    } catch (err) {
      reject(err);
    }
  });
};

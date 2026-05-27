
//Ponyo1 Art Work
const Ponyo1Images = [
    "Images/Ponyo1/Ponyo1_1.png",
    "Images/Ponyo1/Ponyo1_2.png",
    "Images/Ponyo1/Ponyo1_3.png",
    "Images/Ponyo1/Ponyo1_4.png",
    "Images/Ponyo1/Ponyo1_5.png"
];

let currentPonyo1 = 0;

function openPonyo1Gallery() {
    document.getElementById("Ponyo1Modal").style.display = "flex";
    document.getElementById("Ponyo1Image").src =
        Ponyo1Images[currentPonyo1];
}

function closePonyo1Gallery() {
    document.getElementById("Ponyo1Modal").style.display = "none";
}

function nextPonyo1() {
    currentPonyo1++;

    if (currentPonyo1 >= Ponyo1Images.length) {
        currentPonyo1 = 0;
    }

    document.getElementById("Ponyo1Image").src =
        Ponyo1Images[currentPonyo1];
}

function prevPonyo1() {
    currentPonyo1--;

    if (currentPonyo1 < 0) {
        currentPonyo1 = Ponyo1Images.length - 1;
    }

    document.getElementById("Ponyo1Image").src =
        Ponyo1Images[currentPonyo1];
}

//Kayden Break Art Work
const KaydenImages = [
    "Images/Kayden/Kayden1.png",
    "Images/Kayden/Kayden2.png",
    "Images/Kayden/Kayden3.png",
    "Images/Kayden/Kayden4.png",
    "Images/Kayden/Kayden5.png"
];

let currentKayden = 0;

function openKaydenGallery() {
    document.getElementById("KaydenModal").style.display = "flex";

    document.getElementById("KaydenImage").src =
        KaydenImages[currentKayden];
}

function closeKaydenGallery() {
    document.getElementById("KaydenModal").style.display = "none";
}

function nextKayden() {
    currentKayden++;

    if (currentKayden >= KaydenImages.length) {
        currentKayden = 0;
    }

    document.getElementById("KaydenImage").src =
        KaydenImages[currentKayden];
}

function prevKayden() {
    currentKayden--;

    if (currentKayden < 0) {
        currentKayden = KaydenImages.length - 1;
    }

    document.getElementById("KaydenImage").src =
        KaydenImages[currentKayden];
}

//Cloud Art Work
const CloudImages = [
    "Images/Cloud/Cloud1.png",
    "Images/Cloud/Cloud2.png",
    "Images/Cloud/Cloud3.png",
    "Images/Cloud/Cloud4.png"
];

let currentCloud = 0;

function openCloudGallery() {
    document.getElementById("CloudModal").style.display = "flex";

    document.getElementById("CloudImage").src =
        CloudImages[currentCloud];
}

function closeCloudGallery() {
    document.getElementById("CloudModal").style.display = "none";
}

function nextCloud() {
    currentCloud++;

    if (currentCloud >= CloudImages.length) {
        currentCloud = 0;
    }

    document.getElementById("CloudImage").src =
        CloudImages[currentCloud];
}

function prevCloud() {
    currentCloud--;

    if (currentCloud < 0) {
        currentCloud = CloudImages.length - 1;
    }

    document.getElementById("CloudImage").src =
        CloudImages[currentCloud];
}

//Starry Night Art Work
const Starry_NightImages = [
    "Images/Starry_Night/Starry_Night1.png",
    "Images/Starry_Night/Starry_Night2.png",
    "Images/Starry_Night/Starry_Night3.png",
    "Images/Starry_Night/Starry_Night4.png",
    "Images/Starry_Night/Starry_Night5.png"
];

let currentStarry_Night = 0;

function openStarry_NightGallery() {
    document.getElementById("Starry_NightModal").style.display = "flex";

    document.getElementById("Starry_NightImage").src =
        Starry_NightImages[currentStarry_Night];
}

function closeStarry_NightGallery() {
    document.getElementById("Starry_NightModal").style.display = "none";
}

function nextStarry_Night() {
    currentStarry_Night++;

    if (currentStarry_Night >= Starry_NightImages.length) {
        currentStarry_Night = 0;
    }

    document.getElementById("Starry_NightImage").src =
        Starry_NightImages[currentStarry_Night];
}

function prevStarry_Night() {
    currentStarry_Night--;

    if (currentStarry_Night < 0) {
        currentStarry_Night = Starry_NightImages.length - 1;
    }

    document.getElementById("Starry_NightImage").src =
        Starry_NightImages[currentStarry_Night];
}

//Pumpkin Night Art Work
const Pumpkin_NightImages = [
    "Images/Pumpkin_Night/Pumpkin_Night1.png",
    "Images/Pumpkin_Night/Pumpkin_Night2.png",
    "Images/Pumpkin_Night/Pumpkin_Night3.png",
    "Images/Pumpkin_Night/Pumpkin_Night4.png"
];

let currentPumpkin_Night = 0;

function openPumpkin_NightGallery() {
    document.getElementById("Pumpkin_NightModal").style.display = "flex";

    document.getElementById("Pumpkin_NightImage").src =
        Pumpkin_NightImages[currentPumpkin_Night];
}

function closePumpkin_NightGallery() {
    document.getElementById("Pumpkin_NightModal").style.display = "none";
}

function nextPumpkin_Night() {
    currentPumpkin_Night++;

    if (currentPumpkin_Night >= Pumpkin_NightImages.length) {
        currentPumpkin_Night = 0;
    }

    document.getElementById("Pumpkin_NightImage").src =
        Pumpkin_NightImages[currentPumpkin_Night];
}

function prevPumpkin_Night() {
    currentPumpkin_Night--;

    if (currentPumpkin_Night < 0) {
        currentPumpkin_Night = Pumpkin_NightImages.length - 1;
    }

    document.getElementById("Pumpkin_NightImage").src =
        Pumpkin_NightImages[currentPumpkin_Night];
}

//Scream Art Work
const ScreamImages = [
    "Images/Scream/Scream1.png",
    "Images/Scream/Scream2.png",
    "Images/Scream/Scream3.png",
    "Images/Scream/Scream4.png"
];

let currentScream = 0;

function openScreamGallery() {
    document.getElementById("ScreamModal").style.display = "flex";

    document.getElementById("ScreamImage").src =
        ScreamImages[currentScream];
}

function closeScreamGallery() {
    document.getElementById("ScreamModal").style.display = "none";
}

function nextScream() {
    currentScream++;

    if (currentScream >= ScreamImages.length) {
        currentScream = 0;
    }

    document.getElementById("ScreamImage").src =
        ScreamImages[currentScream];
}

function prevScream() {
    currentScream--;

    if (currentScream < 0) {
        currentScream = ScreamImages.length - 1;
    }

    document.getElementById("ScreamImage").src =
        ScreamImages[currentScream];
}

//Ponyo2 Art Work
const Ponyo2Images = [
    "Images/Ponyo2/Ponyo2_1.png",
    "Images/Ponyo2/Ponyo2_2.png",
    "Images/Ponyo2/Ponyo2_3.png",
    "Images/Ponyo2/Ponyo2_4.png",
    "Images/Ponyo2/Ponyo2_5.png"
];

let currentPonyo2 = 0;

function openPonyo2Gallery() {
    document.getElementById("Ponyo2Modal").style.display = "flex";
    document.getElementById("Ponyo2Image").src =
        Ponyo2Images[currentPonyo2];
}

function closePonyo2Gallery() {
    document.getElementById("Ponyo2Modal").style.display = "none";
}

function nextPonyo2() {
    currentPonyo2++;

    if (currentPonyo2 >= Ponyo2Images.length) {
        currentPonyo2 = 0;
    }

    document.getElementById("Ponyo2Image").src =
        Ponyo2Images[currentPonyo2];
}

function prevPonyo2() {
    currentPonyo2--;

    if (currentPonyo2 < 0) {
        currentPonyo2 = Ponyo2Images.length - 1;
    }

    document.getElementById("Ponyo2Image").src =
        Ponyo2Images[currentPonyo2];
}
/////////////////////////////////
/* Generative art for each work */
function noise(x, y, seed) {
    const s = Math.sin(x * 127.1 + y * 311.7 + seed) * 43758.5453;
    return s - Math.floor(s);
}

function drawWork1(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#0d0b09';
    ctx.fillRect(0, 0, W, H);
    const lines = 200;
    for (let i = 0; i < lines; i++) {
        const y = (i / lines) * H;
        ctx.beginPath();
        ctx.moveTo(0, y);
        let px = 0;
        for (let x = 0; x <= W; x += 4) {
            const t = x / W;
            const wave = Math.sin(t * Math.PI * 6 + i * 0.15) * 18 +
                Math.sin(t * Math.PI * 12 + i * 0.3) * 8 +
                (noise(t * 3, i * 0.02, 0) - 0.5) * 30;
            ctx.lineTo(x, y + wave);
        }
        const brightness = 0.15 + (Math.sin(i * 0.08) * 0.5 + 0.5) * 0.25;
        const isAccent = i % 17 === 0;
        ctx.strokeStyle = isAccent
            ? `rgba(200,169,126,${brightness * 1.8})`
            : `rgba(232,228,220,${brightness})`;
        ctx.lineWidth = isAccent ? 1.2 : 0.5;
        ctx.stroke();
    }
}

function drawWork2(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#080a0d';
    ctx.fillRect(0, 0, W, H);
    const cx = W * 0.5, cy = H * 0.45;
    for (let r = Math.max(W, H) * 0.8; r > 2; r -= 3) {
        const alpha = 0.02 + (1 - r / (Math.max(W, H))) * 0.08;
        const hue = 200 + r * 0.05;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = r < 80
            ? `rgba(200,169,126,${alpha * 2})`
            : `rgba(${130 + Math.sin(r * 0.1) * 30}, ${140 + Math.cos(r * 0.08) * 20}, ${180},${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
    grad.addColorStop(0, 'rgba(200,169,126,0.12)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
}

function drawWork3(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
    const cols = 18, rows = 18;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = (i / cols) * W + W / (cols * 2);
            const y = (j / rows) * H + H / (rows * 2);
            const dist = Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2);
            const maxD = Math.sqrt((W / 2) ** 2 + (H / 2) ** 2);
            const size = (1 - dist / maxD) * 12 + 1;
            const alpha = (1 - dist / maxD) * 0.6 + 0.05;
            ctx.fillStyle = dist < maxD * 0.2
                ? `rgba(200,169,126,${alpha * 1.5})`
                : `rgba(232,228,220,${alpha})`;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
    }
}

function drawWork4(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#0b0c0a';
    ctx.fillRect(0, 0, W, H);
    let x = W / 2, y = H / 2;
    const steps = 8000;
    for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const angle = t * Math.PI * 40 + noise(t * 2, 0, 1) * Math.PI;
        const radius = 10 + t * Math.min(W, H) * 0.38 + Math.sin(t * Math.PI * 20) * 15;
        const nx = W / 2 + Math.cos(angle) * radius;
        const ny = H / 2 + Math.sin(angle) * radius;
        const alpha = 0.15 + Math.sin(t * Math.PI * 8) * 0.1;
        const isGold = (i % 80) < 8;
        ctx.fillStyle = isGold
            ? `rgba(200,169,126,${alpha * 2})`
            : `rgba(232,228,220,${alpha * 0.5})`;
        ctx.fillRect(nx, ny, 1.2, 1.2);
    }
}

function drawWork5(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#07090b';
    ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 3000; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const distFromCenter = Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2) / Math.sqrt((W / 2) ** 2 + (H / 2) ** 2);
        const brightness = Math.random() * (1 - distFromCenter * 0.7);
        const size = Math.random() * 1.5;
        ctx.fillStyle = `rgba(232,228,220,${brightness * 0.4})`;
        ctx.fillRect(x, y, size, size);
    }
    const grd = ctx.createRadialGradient(W * 0.5, H * 0.35, 0, W * 0.5, H * 0.35, H * 0.5);
    grd.addColorStop(0, 'rgba(200,169,126,0.08)');
    grd.addColorStop(0.4, 'rgba(100,80,60,0.04)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(7,9,11,0.6)';
    ctx.fillRect(0, H * 0.6, W, H * 0.4);
}

function drawWork6(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#0a0a0b';
    ctx.fillRect(0, 0, W, H);
    const barW = W / 48;
    for (let i = 0; i < 48; i++) {
        const h = (noise(i * 0.15, 0, 5) * 0.7 + 0.15) * H * 0.8;
        const x = i * barW;
        const alpha = 0.2 + noise(i * 0.3, 0, 3) * 0.5;
        ctx.fillStyle = i % 7 === 0
            ? `rgba(200,169,126,${alpha * 1.5})`
            : `rgba(232,228,220,${alpha * 0.5})`;
        ctx.fillRect(x + 1, H - h, barW - 2, h);
    }
}

function drawWork7(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(0, 0, W, H);
    const particles = [];
    for (let i = 0; i < 300; i++) {
        let x = W / 2 + (Math.random() - 0.5) * 40;
        let y = H * 0.5 + (Math.random() - 0.5) * 20;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2;
        const life = 80 + Math.random() * 200;
        for (let t = 0; t < life; t++) {
            const drag = 0.98;
            const vx = Math.cos(angle + noise(x * 0.005, y * 0.005, i) * 4) * speed * (drag ** t);
            const vy = Math.sin(angle + noise(x * 0.005, y * 0.005, i + 1) * 4) * speed * (drag ** t);
            x += vx; y += vy;
            const alpha = (1 - t / life) * 0.5;
            ctx.fillStyle = t < 20
                ? `rgba(200,169,126,${alpha * 1.5})`
                : `rgba(232,228,220,${alpha * 0.6})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

function drawPortrait(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 400;
    const H = canvas.offsetHeight || 530;
    canvas.width = W; canvas.height = H;
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += 3) {
        for (let x = 0; x < W; x += 3) {
            const nx = x / W, ny = y / H;
            const n = noise(nx * 4, ny * 6, 7) * noise(nx * 2, ny * 3, 11);
            const silhouette = ny > 0.15 && nx > 0.2 && nx < 0.8 && ny < 0.9;
            if (silhouette) {
                const v = n * 0.3 + (1 - Math.abs(nx - 0.5) * 2) * 0.2;
                ctx.fillStyle = `rgba(200,169,126,${v * 0.6})`;
                ctx.fillRect(x, y, 2, 2);
            }
        }
    }
    const grd = ctx.createLinearGradient(0, 0, 0, H);
    grd.addColorStop(0, 'rgba(13,13,13,0.8)');
    grd.addColorStop(0.3, 'transparent');
    grd.addColorStop(0.7, 'transparent');
    grd.addColorStop(1, 'rgba(13,13,13,0.9)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
}

/* Init canvases */
function initCanvas(id, drawFn) {
    const el = document.getElementById(id);
    if (!el) return;
    const parent = el.parentElement;
    const W = parent.offsetWidth || 400;
    const H = parent.offsetHeight || 300;
    el.width = W; el.height = H;
    drawFn(el);
}

window.addEventListener('load', () => {
    initCanvas('c1', drawWork1);
    initCanvas('c2', drawWork2);
    initCanvas('c3', drawWork3);
    initCanvas('c4', drawWork4);
    initCanvas('c5', drawWork5);
    initCanvas('c6', drawWork6);
    initCanvas('c7', drawWork7);
    drawPortrait(document.getElementById('portrait-canvas'));
});

window.addEventListener('resize', () => {
    initCanvas('c1', drawWork1);
    initCanvas('c2', drawWork2);
    initCanvas('c3', drawWork3);
    initCanvas('c4', drawWork4);
    initCanvas('c5', drawWork5);
    initCanvas('c6', drawWork6);
    initCanvas('c7', drawWork7);
    drawPortrait(document.getElementById('portrait-canvas'));
});
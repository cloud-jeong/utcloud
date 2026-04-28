
### 폴더구조
```
my-app/
├── src/
│   ├── app/                # App Router (라우팅, 레이아웃, 페이지)
│   │   ├── api/            # API Route 핸들러
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # 재사용 가능한 컴포넌트 (UI, 공통 등)
│   │   ├── common/         # Button, Input, Modal 등
│   │   └── layout/         # Header, Footer, Sidebar 등
│   ├── hooks/              # 커스텀 훅
│   ├── lib/                # 외부 라이브러리 설정 (prisma, axios 등)
│   ├── types/              # TypeScript 타입 정의
│   ├── utils/              # 유틸리티 함수
│   └── styles/             # 전역 스타일 (tailwind, css)
├── public/                 # 정적 파일 (이미지, 폰트 등)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```


### TODO 사항

1. .env.local.example을 복사해서 .env.local 파일 생성
2. SMTP 정보 입력 (Gmail 앱 비밀번호 발급 필요)
   > Gmail 사용 시 2단계 인증 + App Password 발급 필요
3. 배포할땐 .env 파일로

---

### .env.local 파일 내용
```bash
# SMTP 설정 (문의 폼 이메일 발송용)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bluedove@gmail.com
SMTP_PASS=ktkz tttt xxxx aaaa
CONTACT_EMAIL_TO=cloud.jung@utcloud.io
```


### 로컬 개발 실행

```bash
npm run dev
# → http://localhost:3000
```

### 도커 compose 배포

```bash
# 배포할 서버에서 .env 생성 후:
docker compose up -d --build

# 업데이트 시:
docker compose up -d --build
```

### 도커 수동
```bash
# 이미지 빌드
docker build -t utcloud:1.0.0 .

# RUN
docker run -d --name utcloud -p 3000:3000 \
 -m 512m --cpus "0.5" --restart=unless-stopped \
 -e TZ=Asia/Seoul \
 utcloud:1.0.0
```





### 빌드 후 출력
`npm run build` 실행 시 출력 파일은 `.next/` 폴더에 생성됩니다.

`output: 'standalone'` 설정이 되어 있으므로 구조는 다음과 같습니다:

```
.next/
├── standalone/          ← Docker 배포용 최소 런타임 (이게 핵심)
│   ├── server.js        ← 실행 진입점 (node server.js)
│   ├── node_modules/    ← 필요한 모듈만 포함 (경량화)
│   └── .next/
│       └── server/      ← 서버사이드 렌더링 코드
├── static/              ← JS/CSS 번들, 폰트, 이미지 등 정적 자산
├── server/              ← 서버 컴포넌트 빌드 결과
├── cache/               ← 빌드 캐시
└── BUILD_ID             ← 배포 식별용 해시
```

#### Docker에서 사용하는 경로:

`Dockerfile`에서 아래 파일들을 복사합니다:

 - `.next/standalone/` → 서버 실행 파일
 - `.next/static/` → `standalone/.next/static/`으로 복사 (정적 자산)
 - `public/` → `standalone/public/`으로 복사 (이미지, 로고 등)

#### 로컬에서 standalone 빌드 직접 실행:

`node .next/standalone/server.js`
`.next/` 폴더는 `.gitignore`에 포함되어 있어 git에는 커밋되지 않습니다.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


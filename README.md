This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo on Vercel

[https://github-issue-blog-blond.vercel.app/](https://github-issue-blog-blond.vercel.app/)

## Getting Started

Node.js version: v.18.14.2

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## 功能列表

### 基本功能

- [x] GitHub Login
  - [x] 在登入時需要求正確的 scope
- [x] API
  - [x] crete
  - [x] update
  - [x] delete
  - [x] get
  - [x] getList
- [x] UI
  - [x] list page
    - [x] infinite load
    - [x] ui
  - [x] post page
    - [x] 正確 render出markdown內容
    - [x] edit page
    - [x] create page
    - [x] 至少需要使用 title 和 body 兩個欄位
    - [x] 表單驗證:title 為必填,body 至少需要 30 字

## 主要使用到的套件

- UI相關
  - next-ui: ui library
  - tailwind css
  - react-markdown
- api相關
  - next auth: oauth 驗證
  - octokit
  - react query
  - zod: 型別檢查

### 許願池

- [ ] 全部 用 server component
- [ ] 更好的rwd
- [ ] 希望markdown要可以上傳圖片
- [ ] skeleton想要可以對應上頁面
- [ ] 希望要可以sort跟filter，sort跟filter想要可以放在網址列上
- [ ] 想要有評論系統
- [ ] 更多的error handling
  - [ ] 404
  - [ ] 401
  - [ ] Request quota exhausted!!!!
- [ ] 換掉 next auth

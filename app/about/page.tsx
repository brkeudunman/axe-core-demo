"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
            <Image
              src="/vercel.svg"
              alt="" // Missing alt text
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <Link href="/">Home</Link>
      </div>

      <h4>This page has multiple accessibility errors</h4>
      <img width={20} height={20} src="../favicon.ico" /> {/* Missing alt text */}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <form>
        <div style={{display: "flex", gap: "4px",}}>
          <input type="checkbox"checked onChange={(val)=>{
            console.log("You should be")
            return !val
          }}></input>
          <p>
            Are you having fun while coding?</p>
        </div>
        <button type="button" style={{ display: 'none' }}>
          Hidden Button
        </button> {/* This button is hidden and has no purpose */}
        <br></br>
        <p>Give me a feedback about this page</p>
        <select defaultValue="">
          <option value="" disabled>Feedback options</option>
          <option>My feedback is !false</option>
          <option>My feedback is !true</option>
        </select>
        <br></br>
        <br></br>
        <button>Reload</button>
      </form>
    </main >
  );
}

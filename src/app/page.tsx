"use server";
import styles from "./page.module.css";
import React from "react";
import { getTttt } from "./about/akcja";
import { HomeData } from "./page.data";

export default async function Home() {

    const cookie = await getTttt()

    return (
        <main className={styles.main}>
            <HomeData />

            <div>
                <div>
                    ciasteczko
                </div>
                <div>
                    {cookie}
                </div>
            </div>
        </main>
    );
}

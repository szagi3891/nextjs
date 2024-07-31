"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { serverAction, ServerActionResult, tttt } from "./about/akcja";


export default function Home() {

    const [ headersList, setValue ] = React.useState<Array<ServerActionResult>>([]);

    const fetch = async () => {
        const data = await serverAction();

        console.info('data', data);
        setValue(data);
    };

    const [aaa, setAaa] = React.useState<string>('');

    const fetchTttt = async () => {
        const data = await tttt();
        setAaa(data);
    }

    const headers = [];

    for (const { header, value } of headersList) {
        headers.push(
            <div key={header}>
                {header} == {value}
            </div>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.description} style={{ cursor: 'pointer' }}>
                <p onClick={fetch}>
                    Załaduj dane z serwera
                </p>
            </div>

            <div className={styles.description} style={{ cursor: 'pointer' }}>
                <p onClick={fetchTttt}>
                    Załaduj dane z serwera 2
                </p>
            </div>

            <div style={{
                textAlign: 'left'
            }}>
                { headers }
            </div>

            <div>
                { aaa }
            </div>
        </main>
    );
}

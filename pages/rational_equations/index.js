import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from "react";

import debug_ from '../../components/debug_helper';

import inner_nav from '../../styles/InnerNav.module.css';
import post_styles from '../../styles/Posts.module.css';

import { getStaticPathsHelper  } from "../../components/page_generator";

const file_path = "posts/rational_equations/examples";
const cwd_file_path = "rational_equations/examples";

export default function rational_equation({paths}) {

	return (
		<>
			<Head>
				<title>Rational Equations</title>
			</Head>
			<main className={post_styles.post_container}>
				<div className={post_styles.post_meta_data}>
					<h1>Rational Equations</h1>
					<h2>
						What are They?
					</h2>
					<p>
						A rational equation is an equation containing at least one fraction whose numerator and denominator are polynomials
					</p>
				</div>
				<nav className={inner_nav.navbar}>
					<ul className={inner_nav.navbar_nav}>
						{paths.map((i, k) => {
							return (
								<li className={inner_nav.nav_item}>
									<Link key={k} href={`${cwd_file_path}/${i.params.slug}`}><a className={inner_nav.nav_link}>
										<span className={inner_nav.link_text}>{i.params.slug}</span>
										</a>
										</Link>
									{debug_(`${cwd_file_path}/${i.params.slug}`)}
								</li>
							)
						})}
					</ul>
				</nav>
			</main>
		</>	
	)
}

export async function getStaticProps() {
	const static_paths = getStaticPathsHelper(file_path);
	
	return { props: { paths: (await static_paths).paths, } };
}
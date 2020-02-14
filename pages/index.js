import React, { useState, Fragment } from 'react';
import Header from '../components/PageHeader';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/Layout';
import ProgressCircle from '../components/ProgressCircle';
import Head from 'next/head';
import GoogleOne from '../public/googleone.jpg';

const Index = (props) => {
	const [pageNum, setPageNum] = useState(1);
	const [news, setNews] = useState(props.totalNews);
	const [hasMore, setHasMore] = useState(true);
	// console.log(props.totalNews);

	const loadFunc = async () => {
		const res = await fetch(`https://newsapi.org/v2/top-headlines?page=${pageNum + 1}&pageSize=10&country=us&category=business&apiKey=${process.env.apiKey}`);
		const totalNews = await res.json();

		let nextTenPageNum = pageNum + 1;

		// console.log(nextTenPageNum);
		setNews([...news, ...totalNews.articles]); // all news including previous list
		setPageNum(nextTenPageNum);

		if (nextTenPageNum >= props.count / 10) setHasMore(false);
	}
	// console.log('hasMore', hasMore);
	return (
		<Fragment>
			<Head>
				<title>Google-News</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href={ GoogleOne } />
			</Head>
			<Header />
			<InfiniteScroll
				pageStart={0}
				loadMore={loadFunc}
				hasMore={hasMore}
				loader={<ProgressCircle key={0} />}
			>
				<Layout news={news} />
			</InfiniteScroll>

			<style jsx global>{`
				h2 {
					color: green;
					font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
				}

				.loader {
					display: flex;
					justify-content: center;
					margin: 30px;
				}

				.container {
					margin: 16px auto;
					width: 40%;
				}

				.cardClass {
					padding: 20px;
				}

				.flexbox {
					display: flex;
					justify-content: space-between;
				}

				.image {
					border-radius: 20px;
					height: 110px;
					width: 150px;
				}

				.metaData {
					margin-right: 40px;
					display: block;
				}
				
				p {
					display: block;
				}

				.metaDataPhone {
					display: none;
				}

				.timeago::before {
					content: '•';
					margin-right: 5px;
					margin-left: 5px;
				}

				@media only screen and (max-width: 768px) {
					.flexbox {
						justify-content: space-between;
					}

					.container {
						width: 95%;
					}

					.cardClass {
						padding: 10px;
					}

					.image {
						height: 90px;
						width: 110px;
					}

					.metaDataPhone {
						margin-right: 8px;
						display: block;
					}
					.metaData {
						display: none;
					}
				}

				@media (min-width: 768px) and (max-width: 1024px) {
					.flexbox {
						justify-content: space-between;
					}

					.container {
						width: 70%;
					}

					.image {
						height: 100px;
						width: 120px;
					}
				}

				@media (min-width: 1024px) and (max-width: 1200px) {
					.flexbox {
						justify-content: space-between;
					}

					.container {
						width: 60%;
					}

					.image {
						height: 100px;
						width: 110px;
					}
				}

			`}</style>
		</Fragment>
	)
}

Index.getInitialProps = async function () {
	const res = await fetch(`https://newsapi.org/v2/top-headlines?page=1&pageSize=10&country=us&category=business&apiKey=${process.env.apiKey}`);
	const allHeadlines = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.apiKey}`);

	const totalNews = await res.json();
	const totalHeadlines = await allHeadlines.json();
	// console.log(`News data fetched. Count: ${totalNews}`);
	console.log(totalHeadlines.totalResults);

	return {
		totalNews: totalNews.articles,
		count: totalHeadlines.totalResults
	};
};

export default Index;


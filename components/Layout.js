import React from "react";
import { Card } from "antd";
import TimeAgo from "react-timeago";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

export default function Layout({ news }) {
	return news.map((eachNews, index) => {
		return (
			<div className="container" key={index}>
				<a href={eachNews.url} target="_blank">
					<Card
						hoverable
						bordered={true}
						className="cardClass"
                        bodyStyle={{ padding: "0" }}
                        id={index}
                        style={{ borderRadius: "10px", border: "1px solid #cedbd2" }}
					>
						<div className="flexbox">
							<div className="metaData">
								<h2>{eachNews.title.split("-")[0]}</h2>
								<p
									style={{
										marginTop: "-10px",
										marginBottom: "10px",
										opacity: ".7",
									}}
								>
									{eachNews.source.name}
									<TimeAgo className="timeago" date={eachNews.publishedAt} />
								</p>
								<p>{eachNews.description}</p>
							</div>

							<div className="metaDataPhone">
								<p style={{ opacity: "1" }}>{eachNews.title.split("-")[0]}</p>
								<p
									style={{
										marginTop: "-7px",
										paddingBottom: "-5px",
										opacity: ".7",
									}}
								>
									{eachNews.source.name} <br></br>
									<TimeAgo className="timeago" date={eachNews.publishedAt} />
								</p>
							</div>

							<div className="imageContainer">
								<LazyLoadImage
									className="image"
									alt="the news pic"
									effect="blur"
									src={eachNews.urlToImage} // use normal <img> attributes as props
								/>
							</div>
						</div>
					</Card>
				</a>
			</div>
		);
	});
}

Layout.defaultProps = { news: [] };
Layout.propTypes = { news: PropTypes.array.isRequired };

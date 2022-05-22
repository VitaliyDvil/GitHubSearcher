import React from "react";
import cl from "./Content.module.css";
import EmptyRepo from "../EmptyRepo/EmptyRepo";

const Content = (props) => {
    const { avatar, login, followers, following, repos, name, gitHubLink, totalReposCount } = props;

    return (
        <div className={cl.content}>
            <div className={cl.user}>
                <img className={cl.avatar} src={avatar} alt="Avatar" />
                <p className={cl.name}>{name}</p>
                <a className={cl.linkToGitHub} href={gitHubLink} target="_blank" without="true">{login}</a>
                <p className={cl.followers}><img className={cl.followersIcon} src="/icons/followers.jpg" alt="Followers" />{`${followers} followers`}</p>
                <p className={cl.followers}><img className={cl.followersIcon} src="/icons/following.jpg" alt="Following" />{`${following} following`}</p>
            </div>
            <div className={cl.repos}>
                {repos.length ? <h2 className={cl.reposCount}>Repositories ({totalReposCount})</h2> : null}
                {repos.length
                    ? repos.map(({ name, id, description, html_url }, i) =>
                        <div key={id}>
                            <a className={cl.repoLink} href={html_url} target="_blank" without="true">{name}</a>
                            <p className={cl.repoDescription}>{description}</p>
                        </div>
                    )
                    : <EmptyRepo />
                }
            </div>
        </div>
    );
}

export default Content;
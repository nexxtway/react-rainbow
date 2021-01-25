import React from 'react';
import PropTypes from 'prop-types';
import LabelText from './labelText';
import DescriptionText from './descriptionText';
import {
    ResultItemContainer,
    IconContainer,
    OptionText,
    PostContainer,
    StyledImage,
    PostText,
    Information,
} from './styled';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const PostItemSearchResult = props => {
    const { icon, title, description, image, date, author } = props;
    const formattedPostDate = date
        ? new Intl.DateTimeFormat(undefined, options).format(new Date(date))
        : '';
    return (
        <ResultItemContainer>
            <IconContainer>{icon}</IconContainer>
            <OptionText>
                <LabelText value={title} />
                <DescriptionText value={description} />
                <PostContainer>
                    <StyledImage url={image} alt="post" />
                    <PostText>
                        <LabelText value={title} variant="small" />
                        <Information>Publication Date: {formattedPostDate}</Information>
                        <Information variant="author">By: {author}</Information>
                    </PostText>
                </PostContainer>
            </OptionText>
        </ResultItemContainer>
    );
};

PostItemSearchResult.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.array,
    description: PropTypes.array,
    image: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
};

PostItemSearchResult.defaultProps = {
    icon: undefined,
    title: undefined,
    description: undefined,
    image: undefined,
    date: undefined,
    author: undefined,
};

export default PostItemSearchResult;

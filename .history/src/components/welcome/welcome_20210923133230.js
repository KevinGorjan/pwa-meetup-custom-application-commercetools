import PropTypes from 'prop-types';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Constraints from '@commercetools-uikit/constraints';
import Grid from '@commercetools-uikit/grid';
import { AngleRightIcon } from '@commercetools-uikit/icons';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import messages from './messages';
import styles from './welcome.mod.css';
import WebDeveloperSvg from './web-developer.svg';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { InformationIcon } from '@commercetools-uikit/icons';

const WrapWith = (props) =>
  props.condition ? props.wrapper(props.children) : props.children;
WrapWith.displayName = 'WrapWith';
WrapWith.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const InfoCard = (props) => (
  <Grid.Item>
    <div className={styles.infoCard}>
      <Spacings.Stack scale="m">
        <Text.Headline as="h3">
          <WrapWith
            condition={true}
            wrapper={(children) =>
              props.isExternal ? (
                <a
                  className={styles.infoCardLink}
                  href={props.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ) : (
                <RouterLink className={styles.infoCardLink} to={props.linkTo}>
                  {children}
                </RouterLink>
              )
            }
          >
            <Spacings.Inline scale="s" alignItems="center">
              <span>{props.title}</span>
              <AngleRightIcon size="big" color="primary" />
            </Spacings.Inline>
          </WrapWith>
        </Text.Headline>
        <Text.Body>{props.content}</Text.Body>
      </Spacings.Stack>
    </div>
  </Grid.Item>
);
InfoCard.displayName = 'InfoCard';
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

const Welcome = () => {
  const match = useRouteMatch();
  const intl = useIntl();

  return (
    <Constraints.Horizontal max={16}>
      <Spacings.Stack scale="xl">
        <Text.Headline as="h1" intlMessage={messages.title} />
        <div>
          <div className={styles.imageContainer}>
            <img
              alt="web developer"
              src={WebDeveloperSvg}
              width="100%"
              height="100%"
            />
          </div>
          <PrimaryButton
            iconLeft={<InformationIcon />}
            label="A label text"
            onClick={() => alert('Button clicked')}
            isDisabled={false}
          />
        </div>
      </Spacings.Stack>
    </Constraints.Horizontal>
  );
};
Welcome.displayName = 'Welcome';

export default Welcome;

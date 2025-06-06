import * as React from 'react'
import { render } from 'react-dom'
import gsap from 'gsap'

interface LoadingScreenProps {
  onComplete?: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const unmountLoading = gsap.timeline({ paused: true })
    unmountLoading.to(
      '#loading-container',
      {
        scale: 3,
        opacity: 0,
        duration: 0.2
      },
      0
    )
    const logoTl = gsap.timeline({
      paused: true,
      onComplete: () => {
        unmountLoading.play()
        setTimeout(() => {
          onComplete?.()
        }, 100)
      }
    })
    logoTl.fromTo(
      '#loading-back',
      { scaleY: 1, scaleX: 1, transformOrigin: 'center center' },
      {
        scaleY: 1.05,
        scaleX: 1,
        transformOrigin: 'center center',
        duration: 1
      },
      0
    )
    logoTl.fromTo(
      '#loading-back',
      { scaleY: 1.05, scaleX: 1, transformOrigin: 'center center' },
      {
        scaleY: 1,
        scaleX: 1.05,
        transformOrigin: 'center center',
        duration: 1
      },
      1
    )
    logoTl.to(
      '#loading-back',
      { scaleX: 1, transformOrigin: 'center center', duration: 1 },
      2
    )
    gsap.to('#spiral', {
      rotate: 360,
      transformOrigin: 'center center',
      duration: 2,
      ease: 'none',
      repeat: -1
    })
    logoTl.play()
  }, [onComplete])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        background: '#000',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ width: 300 }}>
        <svg
          id='loading-container'
          viewBox='0 0 258 274'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='loading'>
            <g id='background-frame'>
              <g id='background'>
                <g id='loading-back'>
                  <path
                    d='M54.5281 129.064C52.2481 136.838 52.6263 142.725 54.9533 150.389C55.9899 153.804 56.6641 157.325 56.8239 160.889C57.1567 168.311 58.0699 173.365 60.6752 180.5C70.5821 199.507 77.3799 209.792 88.8224 212.941C94.4627 214.493 100.287 215.677 105.467 218.395C111.843 221.741 116.895 223.685 122.744 225.568C127.922 227.234 133.458 227.346 138.8 226.317C146.648 224.805 153.127 223.936 159.939 223.458C166.895 222.969 173.627 220.648 178.988 216.189C182.217 213.504 185.379 210.928 189.625 207.926C192.916 205.6 195.87 202.81 198.198 199.52L203.624 191.849C207.245 186.729 209.121 180.638 209.92 174.418C210.938 166.503 212.945 159.169 216.124 149.275C217.456 145.129 217.983 140.761 217.602 136.423C216.931 128.767 216.318 122.291 214.675 108C212.883 96.6009 211.74 89.9087 210.296 84.3805C209.618 81.7845 208.465 79.339 207.002 77.0901C200.843 67.624 196.066 62.1533 188.6 56.903C185.735 54.8876 182.417 53.6431 179.041 52.7095C169.247 50.0014 162.306 46.5347 153.296 41.229C144.661 36.1434 134.23 35.2471 125.192 39.5768C121.343 41.4204 117.653 43.0431 112.288 44.5763C108.609 45.6279 105.033 47.0712 101.836 49.1739C88.0166 58.2631 79.2237 64.3838 71.3643 73.0051C69.878 74.6354 68.6388 76.4774 67.6154 78.4317C60.4702 92.0761 57.2624 101.567 56.7418 116.564C56.5945 120.806 55.7229 124.99 54.5281 129.064Z'
                    fill='url(#paint0_linear)'
                  />
                  <path
                    d='M54.5281 129.064C52.2481 136.838 52.6263 142.725 54.9533 150.389C55.9899 153.804 56.6641 157.325 56.8239 160.889C57.1567 168.311 58.0699 173.365 60.6752 180.5C70.5821 199.507 77.3799 209.792 88.8224 212.941C94.4627 214.493 100.287 215.677 105.467 218.395C111.843 221.741 116.895 223.685 122.744 225.568C127.922 227.234 133.458 227.346 138.8 226.317C146.648 224.805 153.127 223.936 159.939 223.458C166.895 222.969 173.627 220.648 178.988 216.189C182.217 213.504 185.379 210.928 189.625 207.926C192.916 205.6 195.87 202.81 198.198 199.52L203.624 191.849C207.245 186.729 209.121 180.638 209.92 174.418C210.938 166.503 212.945 159.169 216.124 149.275C217.456 145.129 217.983 140.761 217.602 136.423C216.931 128.767 216.318 122.291 214.675 108C212.883 96.6009 211.74 89.9087 210.296 84.3805C209.618 81.7845 208.465 79.339 207.002 77.0901C200.843 67.624 196.066 62.1533 188.6 56.903C185.735 54.8876 182.417 53.6431 179.041 52.7095C169.247 50.0014 162.306 46.5347 153.296 41.229C144.661 36.1434 134.23 35.2471 125.192 39.5768C121.343 41.4204 117.653 43.0431 112.288 44.5763C108.609 45.6279 105.033 47.0712 101.836 49.1739C88.0166 58.2631 79.2237 64.3838 71.3643 73.0051C69.878 74.6354 68.6388 76.4774 67.6154 78.4317C60.4702 92.0761 57.2624 101.567 56.7418 116.564C56.5945 120.806 55.7229 124.99 54.5281 129.064Z'
                    fill='url(#paint1_radial)'
                  />
                  <path
                    d='M54.5281 129.064C52.2481 136.838 52.6263 142.725 54.9533 150.389C55.9899 153.804 56.6641 157.325 56.8239 160.889C57.1567 168.311 58.0699 173.365 60.6752 180.5C70.5821 199.507 77.3799 209.792 88.8224 212.941C94.4627 214.493 100.287 215.677 105.467 218.395C111.843 221.741 116.895 223.685 122.744 225.568C127.922 227.234 133.458 227.346 138.8 226.317C146.648 224.805 153.127 223.936 159.939 223.458C166.895 222.969 173.627 220.648 178.988 216.189C182.217 213.504 185.379 210.928 189.625 207.926C192.916 205.6 195.87 202.81 198.198 199.52L203.624 191.849C207.245 186.729 209.121 180.638 209.92 174.418C210.938 166.503 212.945 159.169 216.124 149.275C217.456 145.129 217.983 140.761 217.602 136.423C216.931 128.767 216.318 122.291 214.675 108C212.883 96.6009 211.74 89.9087 210.296 84.3805C209.618 81.7845 208.465 79.339 207.002 77.0901C200.843 67.624 196.066 62.1533 188.6 56.903C185.735 54.8876 182.417 53.6431 179.041 52.7095C169.247 50.0014 162.306 46.5347 153.296 41.229C144.661 36.1434 134.23 35.2471 125.192 39.5768C121.343 41.4204 117.653 43.0431 112.288 44.5763C108.609 45.6279 105.033 47.0712 101.836 49.1739C88.0166 58.2631 79.2237 64.3838 71.3643 73.0051C69.878 74.6354 68.6388 76.4774 67.6154 78.4317C60.4702 92.0761 57.2624 101.567 56.7418 116.564C56.5945 120.806 55.7229 124.99 54.5281 129.064Z'
                    stroke='#97D257'
                  />
                </g>
                <g id='Vector 6' filter='url(#filter0_f)'>
                  <path
                    d='M63.1752 93.5C63.1752 105.5 50.1752 133.5 62.1752 171.5L66.6752 167C64.8082 163.136 57.7405 152.624 57.6752 141C66.6752 114 64.9784 102.816 63.1752 93.5Z'
                    fill='#B0D649'
                  />
                </g>
                <g id='Vector 7' filter='url(#filter1_f)'>
                  <path
                    d='M127.175 44C90.7273 55.5607 76.4119 66.0288 63.1752 96.5C63.1752 96.5 52.6753 110.5 74.6752 85C96.6752 59.5 115.496 49.1915 132.175 49C146.928 50.4238 154.55 52.75 167.675 58C179.248 63.3785 184.201 67.3732 190.675 76L199.175 105.5L202.175 123L203.175 143C203.175 143 205.175 129.5 205.175 123V108C207.422 113.549 207.702 117.904 208.618 124.231C208.781 125.359 210.251 125.309 210.359 124.174C211.971 107.235 210.893 97.3884 206.175 83C206.175 83 197.175 66 181.675 58C166.175 49.9999 158.175 49 158.175 49C146.62 40.5378 139.975 37.7688 127.175 44Z'
                    fill='#B4DB4E'
                  />
                </g>
                <g id='Vector 4' filter='url(#filter2_df)'>
                  <path
                    d='M81.1994 158.548C82.1146 178.988 84.2864 187.919 93.1752 195.5C94.3364 192.653 95.3421 191.522 100.175 193.5C115.273 206.119 125.614 210.589 140.35 208.684C145.289 208.045 146.319 201.762 142.175 199C135.502 194.409 133.049 191.963 132.675 188L132.191 187.419C130.901 185.871 132.47 183.557 134.411 184.101C143.619 186.683 149.631 186.814 157.675 184C153.133 183.571 149.892 183.884 147.587 182.42C146.222 181.552 147.371 179.864 148.976 180.063C161.493 181.614 169.138 179.354 176.92 174.794C182.908 171.285 188.155 166.226 190.413 159.664C191.66 156.039 192.506 151.792 193.178 145.946C193.556 142.662 193.542 139.34 193.205 136.052C192.243 126.686 191.073 120.111 188.175 109.5L181.675 94C177.278 84.1308 173.073 80.1643 160.675 77.5L144.175 71.5L135.94 67.9196C133.767 66.9747 131.528 66.188 129.2 65.7444C125.571 65.0529 119.84 64.2436 115.675 65C110.637 65.9151 103.742 69.8757 102.787 70.4344C102.71 70.4794 102.64 70.5278 102.57 70.5833L86.8098 83.0991C86.435 83.3966 86.6454 84 87.124 84C87.5476 84 87.7832 84.4901 87.5185 84.8209L80.1752 94L76.0747 100.308C74.4775 102.766 72.6236 105.046 70.8773 107.4C67.5734 111.852 65.8219 116.187 65.4951 120.927C65.0337 127.619 66.0524 134.425 64.8525 141.025C64.0801 145.273 64.391 149.647 65.7563 153.743L66.2585 155.25C66.3591 155.552 66.7992 155.508 66.8387 155.192L67.928 146.478C67.9925 145.962 68.7041 145.875 68.8908 146.36L75.2938 163.008C75.4024 163.291 75.8136 163.253 75.8687 162.955L77.4708 154.304C77.5775 153.728 78.4177 153.774 78.461 154.358L79.1752 164L81.0039 158.514C81.039 158.409 81.1944 158.437 81.1994 158.548Z'
                    fill='url(#paint2_radial)'
                  />
                </g>
                <g id='Vector 8' filter='url(#filter3_f)'>
                  <path
                    d='M68.6752 85C73.267 84.1528 75.321 83.9479 78.1752 84C73.0891 87.3155 69.9303 90.1214 64.1752 95.5C65.5676 90.9437 65.8677 88.8981 68.6752 85Z'
                    fill='#7CBF4E'
                  />
                </g>
                <g id='Vector 9' filter='url(#filter4_f)'>
                  <path
                    d='M77.1752 73L73.1752 78C80.3291 76.7069 83.023 77.0497 86.1752 79L104.175 64C94.3129 67.903 88.8393 70.123 77.1752 73Z'
                    fill='#6DB83E'
                  />
                </g>
                <g id='Vector 14' filter='url(#filter5_f)'>
                  <path
                    d='M161.675 210C157.603 214.485 154.482 216.594 148.175 220C155.933 218.88 160.362 218.362 168.675 218C185.595 209.233 193.204 203.871 199.175 192.5C195.422 194.178 192.439 194.642 187.175 195.5C177.865 201.047 173.2 202.686 165.675 203.5L161.675 210Z'
                    fill='#82C342'
                  />
                </g>
                <g id='Vector 10' filter='url(#filter6_f)'>
                  <path
                    d='M126.675 47.5L104.175 56C113.54 54.9064 121.957 51.9045 130.175 53.5L126.675 47.5Z'
                    fill='#66AE41'
                  />
                </g>
                <g id='Vector 11' filter='url(#filter7_f)'>
                  <path
                    d='M214.175 145V135C210.524 147.947 203.675 160.5 199.675 165.5C195.675 170.5 198.675 176.5 198.675 176.5C188.832 188.38 182.607 194.415 170.175 204C181.94 197.932 188.107 193.529 198.175 183.5C198.175 183.5 203.675 185 204.175 183.5C204.675 182 207.864 159.723 214.175 145Z'
                    fill='#C1E14D'
                  />
                </g>
                <g id='Vector 12' filter='url(#filter8_f)'>
                  <path
                    d='M178.175 213C186.511 207.379 191.418 204.376 196.175 196.5C193.203 195.278 191.565 195.934 188.675 198.5C187.987 200.229 188.156 201.064 188.675 202.5C176.226 202.566 170.614 204.26 163.675 211C169.04 213.322 172.2 213.832 178.175 213Z'
                    fill='#A7D447'
                  />
                </g>
                <g id='Vector 13' filter='url(#filter9_f)'>
                  <path
                    d='M211.175 131L212.675 114.5L213.675 127.5L211.175 131Z'
                    fill='#B9DA48'
                  />
                </g>
                <g id='Vector 5'>
                  <path
                    d='M97.1752 210.5L107.175 199.5C121.972 208.59 131.269 212.704 142.675 199.5L160.675 211.5C138.744 228.777 124.075 223.842 97.1752 210.5Z'
                    fill='url(#paint3_linear)'
                    fillOpacity='0.4'
                  />
                  <path
                    d='M97.1752 210.5L107.175 199.5C121.972 208.59 131.269 212.704 142.675 199.5L160.675 211.5C138.744 228.777 124.075 223.842 97.1752 210.5Z'
                    fill='url(#paint4_linear)'
                    fillOpacity='0.1'
                  />
                </g>
                <path
                  id='Vector 1'
                  d='M104.231 202.596C105.504 204.279 106.583 206.033 107.805 208.327C108.182 209.034 107.601 209.866 106.805 209.766L101.938 209.158C101.106 209.054 100.26 209.136 99.4467 209.343C88.6142 212.093 82.4508 206.182 72.1752 184.5C68.027 177.781 67.7198 179.716 68.1752 186C68.1752 186 62.6752 174.272 62.6752 170C62.6752 167 63.1752 166.5 65.6752 166.5C68.8307 166.5 76.3424 175.524 79.3736 179.334C80.2498 180.435 80.942 181.662 81.4767 182.964C88.3207 199.63 92.6164 207.212 97.484 202.873C99.4956 201.08 102.606 200.447 104.231 202.596Z'
                  fill='#C0DE58'
                />
                <path
                  id='Vector 3'
                  d='M121.175 211C121.827 212.049 122.35 212.777 122.175 214C121.789 216.706 117.246 215.784 115.175 214C113.345 212.424 112.313 209.995 113.675 208C115.454 205.395 119.511 208.32 121.175 211Z'
                  fill='#A5D749'
                />
                <g id='Vector 2' filter='url(#filter10_f)'>
                  <path
                    d='M128.675 209.5C127.726 203.449 132.217 200.771 135.675 202.5C142.256 205.79 148.094 208.015 155.283 209.687C155.959 209.844 156.285 210.621 155.875 211.181C153.642 214.226 150.794 216.095 144.675 219C142.057 218.807 140.614 218.451 138.175 216.5C135.83 221.727 131.175 222 128.675 209.5Z'
                    fill='#95D346'
                  />
                </g>
                <circle
                  id='Ellipse 2'
                  cx='59.6752'
                  cy='133'
                  r='2.5'
                  fill='white'
                  fillOpacity='0.6'
                />
                <circle
                  id='Ellipse 17'
                  cx='76.1752'
                  cy='111.5'
                  r='2'
                  fill='white'
                  fillOpacity='0.6'
                />
                <circle
                  id='Ellipse 18'
                  cx='65.1752'
                  cy='101.5'
                  r='2'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 22'
                  cx='79.6752'
                  cy='99.5'
                  rx='1.5'
                  ry='2'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 23'
                  cx='80.1752'
                  cy='94'
                  rx='1'
                  ry='1.5'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 24'
                  cx='81.1752'
                  cy='89'
                  rx='1'
                  ry='1.5'
                  transform='rotate(-15.4788 81.1752 89)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 25'
                  cx='75.1823'
                  cy='84.1031'
                  rx='2.0286'
                  ry='3.07653'
                  transform='rotate(-21.2848 75.1823 84.1031)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 26'
                  cx='78.4324'
                  cy='81.6032'
                  rx='1.34409'
                  ry='1.82236'
                  transform='rotate(-58.1629 78.4324 81.6032)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 27'
                  cx='83.6752'
                  cy='76.3818'
                  rx='1.1206'
                  ry='1.49823'
                  transform='rotate(-16.5015 83.6752 76.3818)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 29'
                  cx='104.694'
                  cy='68.4747'
                  rx='2.41634'
                  ry='3.48618'
                  transform='rotate(-14.2874 104.694 68.4747)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 33'
                  cx='121.627'
                  cy='52.6105'
                  rx='1.26775'
                  ry='2.8482'
                  transform='rotate(27.8548 121.627 52.6105)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 34'
                  cx='128.404'
                  cy='45.6811'
                  rx='1.43202'
                  ry='1.56596'
                  transform='rotate(27.8548 128.404 45.6811)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 35'
                  cx='140.717'
                  cy='51.0536'
                  rx='1.87046'
                  ry='1.89978'
                  transform='rotate(27.8548 140.717 51.0536)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 37'
                  cx='150.297'
                  cy='46.2602'
                  rx='1.87046'
                  ry='1.00245'
                  transform='rotate(27.8548 150.297 46.2602)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 38'
                  cx='155.539'
                  cy='48.8039'
                  rx='1.87046'
                  ry='0.486328'
                  transform='rotate(27.8548 155.539 48.8039)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 39'
                  cx='169.355'
                  cy='54.3694'
                  rx='1.87046'
                  ry='1.12591'
                  transform='rotate(27.8548 169.355 54.3694)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 40'
                  cx='178.074'
                  cy='56.8168'
                  rx='1.02143'
                  ry='1.01599'
                  transform='rotate(27.8548 178.074 56.8168)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 41'
                  cx='185.546'
                  cy='63.4284'
                  rx='1.50849'
                  ry='1.40817'
                  transform='rotate(27.8548 185.546 63.4284)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 42'
                  cx='189.482'
                  cy='69.2187'
                  rx='1.21172'
                  ry='0.808904'
                  transform='rotate(27.8548 189.482 69.2187)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 43'
                  cx='198.785'
                  cy='76.6139'
                  rx='2.47863'
                  ry='2.18551'
                  transform='rotate(77.7441 198.785 76.6139)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 44'
                  cx='208.175'
                  cy='109.964'
                  rx='1.92561'
                  ry='1.62834'
                  transform='rotate(77.7441 208.175 109.964)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 45'
                  cx='208.766'
                  cy='117'
                  rx='1.34031'
                  ry='0.896172'
                  transform='rotate(90.3868 208.766 117)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 46'
                  cx='207.184'
                  cy='122'
                  rx='2.4865'
                  ry='2.00779'
                  transform='rotate(90.3868 207.184 122)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 47'
                  cx='205.871'
                  cy='136.299'
                  rx='2.18509'
                  ry='1.68132'
                  transform='rotate(90.3868 205.871 136.299)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 48'
                  cx='213.273'
                  cy='138.102'
                  rx='2.78868'
                  ry='0.920702'
                  transform='rotate(90.3868 213.273 138.102)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 49'
                  cx='196.123'
                  cy='184.778'
                  rx='1.76244'
                  ry='1.93213'
                  transform='rotate(90.3868 196.123 184.778)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 50'
                  cx='189.6'
                  cy='195.139'
                  rx='1.93451'
                  ry='2.23108'
                  transform='rotate(165.722 189.6 195.139)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 51'
                  cx='177.388'
                  cy='202.707'
                  rx='1.31145'
                  ry='1.48643'
                  transform='rotate(165.722 177.388 202.707)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 52'
                  cx='166.134'
                  cy='207.481'
                  rx='1.31145'
                  ry='1.48643'
                  transform='rotate(-140.302 166.134 207.481)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 53'
                  cx='164.134'
                  cy='209.481'
                  rx='1.31145'
                  ry='1.48643'
                  transform='rotate(-140.302 164.134 209.481)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 54'
                  cx='164.736'
                  cy='214.201'
                  rx='1.31145'
                  ry='1.48643'
                  transform='rotate(169.499 164.736 214.201)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 55'
                  cx='152.656'
                  cy='213.141'
                  rx='1.64557'
                  ry='2.096'
                  transform='rotate(-149.554 152.656 213.141)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 56'
                  cx='142.433'
                  cy='215.326'
                  rx='1.42991'
                  ry='1.68381'
                  transform='rotate(152.413 142.433 215.326)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 57'
                  cx='143.711'
                  cy='211.593'
                  rx='1.4141'
                  ry='3.44371'
                  transform='rotate(121.723 143.711 211.593)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 58'
                  cx='130.848'
                  cy='208.514'
                  rx='1.4141'
                  ry='3.44371'
                  transform='rotate(121.723 130.848 208.514)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 59'
                  cx='130.886'
                  cy='203.896'
                  rx='1.4141'
                  ry='3.44371'
                  transform='rotate(72.2592 130.886 203.896)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 60'
                  cx='140.255'
                  cy='205.814'
                  rx='1.4141'
                  ry='3.12757'
                  transform='rotate(39.4523 140.255 205.814)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 61'
                  cx='135.03'
                  cy='207.376'
                  rx='0.826189'
                  ry='0.775854'
                  transform='rotate(39.4523 135.03 207.376)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 62'
                  cx='122.675'
                  cy='215.599'
                  rx='1.86742'
                  ry='1.66509'
                  transform='rotate(39.4523 122.675 215.599)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 64'
                  cx='116.617'
                  cy='205.472'
                  rx='2.22997'
                  ry='2.01428'
                  transform='rotate(39.4523 116.617 205.472)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 86'
                  cx='145.127'
                  cy='194.058'
                  rx='6.89349'
                  ry='1.00053'
                  transform='rotate(4.66737 145.127 194.058)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 87'
                  cx='165.101'
                  cy='192.103'
                  rx='3.56769'
                  ry='0.872209'
                  transform='rotate(4.66737 165.101 192.103)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 88'
                  cx='161.863'
                  cy='194.338'
                  rx='1.52134'
                  ry='1.29172'
                  transform='rotate(72.5807 161.863 194.338)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 65'
                  cx='113.776'
                  cy='208.161'
                  rx='1.22027'
                  ry='1.16469'
                  transform='rotate(39.4523 113.776 208.161)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 66'
                  cx='111.675'
                  cy='197.934'
                  rx='1.99436'
                  ry='1.51085'
                  transform='rotate(39.4523 111.675 197.934)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 67'
                  cx='105.175'
                  cy='200.767'
                  rx='1.71415'
                  ry='1.06449'
                  transform='rotate(39.4523 105.175 200.767)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 68'
                  cx='101.716'
                  cy='201.019'
                  rx='2.43808'
                  ry='1.39413'
                  transform='rotate(86.4825 101.716 201.019)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 69'
                  cx='98.79'
                  cy='208.217'
                  rx='1.23801'
                  ry='1.39413'
                  transform='rotate(86.4825 98.79 208.217)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 70'
                  cx='96.9511'
                  cy='195.349'
                  rx='1.63642'
                  ry='1.85724'
                  transform='rotate(108.977 96.9511 195.349)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 71'
                  cx='90.6932'
                  cy='195.947'
                  rx='1.33069'
                  ry='2.18609'
                  transform='rotate(131.63 90.6932 195.947)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 72'
                  cx='82.7291'
                  cy='201.347'
                  rx='2.43723'
                  ry='2.55782'
                  transform='rotate(131.63 82.7291 201.347)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 80'
                  cx='168.769'
                  cy='73.0437'
                  rx='2.3701'
                  ry='2.41254'
                  transform='rotate(131.63 168.769 73.0437)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 81'
                  cx='151.553'
                  cy='65.8742'
                  rx='2.3701'
                  ry='2.41254'
                  transform='rotate(131.63 151.553 65.8742)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 82'
                  cx='168.453'
                  cy='64.2579'
                  rx='1.76146'
                  ry='2.41254'
                  transform='rotate(166.457 168.453 64.2579)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 83'
                  cx='155.54'
                  cy='60.6225'
                  rx='1.76146'
                  ry='2.03759'
                  transform='rotate(166.457 155.54 60.6225)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 84'
                  cx='144.966'
                  cy='55.9894'
                  rx='1.35167'
                  ry='2.03759'
                  transform='rotate(166.457 144.966 55.9894)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 85'
                  cx='132.078'
                  cy='61.2172'
                  rx='1.12901'
                  ry='1.66459'
                  transform='rotate(-164.095 132.078 61.2172)'
                  fill='white'
                  fillOpacity='0.2'
                />
                <ellipse
                  id='Ellipse 73'
                  cx='77.9705'
                  cy='190.508'
                  rx='1.77445'
                  ry='1.75013'
                  transform='rotate(131.63 77.9705 190.508)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 74'
                  cx='75.2196'
                  cy='189.825'
                  rx='1.28152'
                  ry='1.07961'
                  transform='rotate(164.633 75.2196 189.825)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 75'
                  cx='71.8407'
                  cy='189.523'
                  rx='1.63166'
                  ry='1.24131'
                  transform='rotate(136.654 71.8407 189.523)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 76'
                  cx='76.9484'
                  cy='175.969'
                  rx='2.2131'
                  ry='1.43972'
                  transform='rotate(83.238 76.9484 175.969)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 77'
                  cx='66.7665'
                  cy='173.308'
                  rx='1.664'
                  ry='1.33291'
                  transform='rotate(56.695 66.7665 173.308)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 78'
                  cx='79.4044'
                  cy='165.929'
                  rx='1.29702'
                  ry='1.33291'
                  transform='rotate(56.695 79.4044 165.929)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 79'
                  cx='82.9404'
                  cy='177.636'
                  rx='1.93366'
                  ry='1.09357'
                  transform='rotate(3.87675 82.9404 177.636)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 63'
                  cx='129.473'
                  cy='222.383'
                  rx='1.2944'
                  ry='0.877406'
                  transform='rotate(0.232219 129.473 222.383)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 36'
                  cx='134.753'
                  cy='50.5444'
                  rx='0.780561'
                  ry='1.89978'
                  transform='rotate(27.8548 134.753 50.5444)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 30'
                  cx='111.258'
                  cy='66.5767'
                  rx='1.90199'
                  ry='2.45331'
                  transform='rotate(-45.423 111.258 66.5767)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 31'
                  cx='107.258'
                  cy='64.5767'
                  rx='1.90199'
                  ry='2.45331'
                  transform='rotate(-45.423 107.258 64.5767)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 32'
                  cx='105.258'
                  cy='60.5767'
                  rx='1.90199'
                  ry='2.45331'
                  transform='rotate(12.8176 105.258 60.5767)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 28'
                  cx='80.8069'
                  cy='74.2645'
                  rx='0.989848'
                  ry='1.51661'
                  transform='rotate(12.1841 80.8069 74.2645)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <circle
                  id='Ellipse 19'
                  cx='61.6752'
                  cy='110'
                  r='1.5'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 20'
                  cx='70.6752'
                  cy='123.5'
                  rx='2.5'
                  ry='2'
                  transform='rotate(-14.2209 70.6752 123.5)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 21'
                  cx='68.961'
                  cy='118.705'
                  rx='2.5'
                  ry='1.7713'
                  transform='rotate(10.7154 68.961 118.705)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <circle
                  id='Ellipse 9'
                  cx='66.1752'
                  cy='161.5'
                  r='2'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 10'
                  cx='64.9892'
                  cy='164.416'
                  rx='2.50529'
                  ry='1.55775'
                  transform='rotate(49.3472 64.9892 164.416)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 12'
                  cx='71.067'
                  cy='162.955'
                  rx='2.98721'
                  ry='2.18765'
                  transform='rotate(74.8637 71.067 162.955)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 13'
                  cx='69.8437'
                  cy='166.218'
                  rx='2.38409'
                  ry='1.42698'
                  transform='rotate(47.0819 69.8437 166.218)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 15'
                  cx='70.4736'
                  cy='155.963'
                  rx='2.08927'
                  ry='1.67286'
                  transform='rotate(92.3404 70.4736 155.963)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 16'
                  cx='72.9064'
                  cy='157.214'
                  rx='1.4614'
                  ry='0.975172'
                  transform='rotate(43.5272 72.9064 157.214)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 14'
                  cx='74.1752'
                  cy='164.533'
                  rx='1.74879'
                  ry='1.10491'
                  transform='rotate(47.0819 74.1752 164.533)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 11'
                  cx='67.3683'
                  cy='159.62'
                  rx='1.52793'
                  ry='1.30583'
                  transform='rotate(66.491 67.3683 159.62)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <circle
                  id='Ellipse 4'
                  cx='63.6752'
                  cy='138'
                  r='1.5'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 3'
                  cx='61.6541'
                  cy='148.078'
                  rx='1.13098'
                  ry='2.44978'
                  transform='rotate(-41.9548 61.6541 148.078)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 5'
                  cx='66.6541'
                  cy='149.078'
                  rx='1.13098'
                  ry='2.44978'
                  transform='rotate(-6.38617 66.6541 149.078)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 6'
                  cx='79.4899'
                  cy='138.329'
                  rx='1.13098'
                  ry='1.71419'
                  transform='rotate(-6.38617 79.4899 138.329)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 7'
                  cx='75.4899'
                  cy='151.329'
                  rx='1.13098'
                  ry='1.71419'
                  transform='rotate(4.04495 75.4899 151.329)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <ellipse
                  id='Ellipse 8'
                  cx='81.9383'
                  cy='155.882'
                  rx='0.647034'
                  ry='1.2717'
                  transform='rotate(4.04495 81.9383 155.882)'
                  fill='white'
                  fillOpacity='0.6'
                />
                <g id='Vector 49'>
                  <path
                    d='M86.5987 68.3005L83.4114 69.4596C82.4059 69.8252 81.606 68.5692 82.3626 67.8127L83.8113 66.3639C84.0397 66.1355 84.3643 66.0315 84.6829 66.0846L86.4214 66.3744C87.4356 66.5434 87.5651 67.9492 86.5987 68.3005Z'
                    fill='white'
                  />
                  <path
                    d='M101.288 60.2507L95.9862 64.7369C95.7868 64.9056 95.5294 64.9896 95.269 64.971L91.0305 64.6682C90.1494 64.6053 89.7767 63.5145 90.4349 62.9255L97.5158 56.59C97.8923 56.2531 98.4609 56.25 98.8411 56.5827L101.301 58.7347C101.761 59.1375 101.755 59.8556 101.288 60.2507Z'
                    fill='white'
                  />
                </g>
                <ellipse
                  id='Ellipse 90'
                  cx='171.538'
                  cy='191.5'
                  rx='1.56315'
                  ry='1.40108'
                  transform='rotate(114.19 171.538 191.5)'
                  fill='white'
                  fillOpacity='0.6'
                />
              </g>
            </g>
            <g id='spiral-frame'>
              <g id='spiral'>
                <g id='Vector 42' filter='url(#filter11_f)'>
                  <path
                    d='M140 69.5L118.5 67.5L90.5 76.5L103.5 61L120.5 57H144.5L179 68.5L187.5 80.5L202.5 111.5V130L198.5 151L193.5 167.5L187.5 170.5L191.5 144L189.5 126L184 107.5L178.5 92L140 69.5Z'
                    fill='url(#paint5_linear)'
                  />
                </g>
                <g id='Vector 41' filter='url(#filter12_f)'>
                  <path
                    d='M129.841 200.898L125.864 198.341C125.025 197.801 125.407 196.5 126.405 196.5H127.307C127.435 196.5 127.561 196.524 127.679 196.572L134.787 199.415C134.927 199.471 135.078 199.494 135.229 199.484L155.545 198.033C155.834 198.012 156.118 198.118 156.323 198.323L159.538 201.538C159.818 201.818 160.239 201.906 160.609 201.762L182.741 193.101C182.911 193.035 183.059 192.924 183.169 192.78L187.941 186.576C187.98 186.526 188.014 186.471 188.043 186.414L193.894 174.711C193.964 174.572 194 174.419 194 174.264V171.61C194 171.537 194.008 171.464 194.024 171.393L195.891 162.992C195.959 162.683 196.171 162.424 196.461 162.295L204.593 158.681C204.852 158.566 205.05 158.346 205.138 158.076L209.549 144.503C209.901 143.42 211.5 143.674 211.5 144.812V149.85C211.5 149.949 211.485 150.048 211.456 150.144L203.523 175.925C203.508 175.975 203.496 176.026 203.489 176.078L202.123 185.641C202.052 186.134 201.63 186.5 201.133 186.5H197C196.448 186.5 196 186.052 196 185.5V184.535C196 184.201 196.167 183.889 196.445 183.703L200.17 181.22C200.382 181.079 200.532 180.862 200.589 180.613L200.987 178.891C201.227 177.848 199.884 177.207 199.225 178.05L180.639 201.822C180.547 201.939 180.431 202.034 180.298 202.101L171.628 206.436C171.543 206.478 171.453 206.509 171.359 206.526L160.5 208.5L151.891 210.892C151.64 210.961 151.372 210.93 151.144 210.806L135.134 202.073C135.045 202.025 134.95 201.99 134.851 201.97L130.186 201.037C130.063 201.013 129.946 200.965 129.841 200.898Z'
                    fill='url(#paint6_linear)'
                  />
                </g>
                <g id='Vector 43' filter='url(#filter13_f)'>
                  <path
                    d='M172.5 105L146 77.5L163.5 82.5L178 91.5L180.5 101L172.5 105Z'
                    fill='#73B64B'
                  />
                </g>
                <g id='Vector 44' filter='url(#filter14_f)'>
                  <path
                    d='M188 99.5L187.507 114.291C187.502 114.43 187.512 114.569 187.536 114.706L192 140L192.916 144.121C192.971 144.371 192.978 144.63 192.936 144.883L191.5 153.5L186 171L184.586 179.486C184.529 179.823 184.388 180.14 184.175 180.407L180.795 184.631C180.601 184.874 180.353 185.068 180.071 185.198L167.5 191M171 191L184.168 185.827C184.697 185.619 185.113 185.195 185.311 184.662L191.5 168L197.358 153.843C197.452 153.616 197.503 153.374 197.509 153.129L197.996 133.646C197.999 133.549 197.994 133.452 197.982 133.355L196 117L194.548 100.064C194.517 99.6954 194.383 99.3424 194.163 99.0448L184.671 86.2309C184.558 86.0778 184.423 85.9416 184.271 85.8266L166.141 72.107C166.047 72.0358 165.947 71.9731 165.842 71.9195L138.5 58M189.5 119.5L194.367 132.153C194.455 132.383 194.5 132.626 194.5 132.871V140V142.5L193.017 154.857C193.006 154.952 192.988 155.046 192.963 155.139L189.5 168L187.5 173L184.742 182.654C184.588 183.193 184.215 183.643 183.713 183.893L173.5 189M199.5 144.5L202.843 133.992C202.946 133.669 202.965 133.326 202.899 132.994L200.575 121.374C200.525 121.127 200.523 120.873 200.568 120.624L201.381 116.156C201.458 115.73 201.395 115.291 201.202 114.904L200.153 112.806C200.052 112.604 199.986 112.385 199.958 112.16L199.036 104.792C199.012 104.598 198.96 104.409 198.881 104.231L189.683 83.415C189.563 83.1418 189.382 82.8991 189.156 82.7048L182.619 77.1024C182.54 77.0342 182.455 76.9724 182.366 76.9176L176.155 73.0952C176.052 73.0319 175.955 72.9593 175.865 72.8785L166 64M180.5 88.5L189.95 97.4772C190.304 97.814 190.523 98.2691 190.565 98.7564L192 115.5M174.5 194L187.183 187.893C187.702 187.643 188.088 187.182 188.243 186.627L192.912 169.817C192.97 169.607 193.063 169.408 193.185 169.228L201.367 157.195C201.456 157.065 201.528 156.926 201.584 156.78L207 142.5M184.5 106V97.2241C184.5 96.7562 184.336 96.3032 184.036 95.9437L179.5 90.5L172.39 82.4423C172.136 82.1536 171.803 81.9445 171.432 81.8403L156.196 77.5551C156.066 77.5185 155.932 77.4951 155.797 77.4855L149.685 77.0489C149.241 77.0172 148.82 76.8383 148.49 76.5406L139 68M127 61.5L144.685 65.9213C144.894 65.9734 145.092 66.0588 145.274 66.1742L155.824 72.8879C155.941 72.9624 156.066 73.0246 156.195 73.0733L164 76M162.5 65.5L151 58L142.335 51.1594C141.813 50.7472 141.12 50.6216 140.486 50.8243L129 54.5M135.5 61.5L124.665 58.0524C124.555 58.0175 124.443 57.9922 124.329 57.9766L114.013 56.5699C113.676 56.5241 113.334 56.5646 113.018 56.6876L104.5 60M133 61.5L117.21 60.0197C117.071 60.0066 116.93 60.0083 116.79 60.0247L108.5 61M135.5 66L122.332 64.0492C122.112 64.0166 121.889 64.0209 121.67 64.0618L114 65.5M138.5 73L128.993 68.7217C128.67 68.5765 128.315 68.5195 127.963 68.5566L119 69.5'
                    stroke='url(#paint7_linear)'
                    strokeWidth='2'
                  />
                </g>
                <g id='Vector 47' filter='url(#filter15_f)'>
                  <path
                    d='M80.5 170L84.5 174L89.5 182L104.5 195L121.5 198M83.5 177L91 188L101.5 194.5L112 204L99.5 196.5L89.5 192.5L82.5 180.5M128 204L122 200.5M112.5 198.5L124 207M113.5 192.5L124 196M101.5 189.5L108 193L113.5 194.5M109.5 198.5L116 205.5L122.5 208.5M137 205L127.5 201.5M136 196.5L125.5 193.5M173.5 168L180 157.5M168 177.5L175.5 172.5L180 161.5M174 177L178 172.5L179 169M174 169.5L177 165.5'
                    stroke='#60A247'
                  />
                </g>
                <g id='Vector 36' filter='url(#filter16_f)'>
                  <path
                    d='M124 81L113.335 76.2598C111.511 75.4493 109.45 75.3499 107.557 75.9809V75.9809C106.53 76.3234 105.443 76.4536 104.364 76.3637L103.959 76.3299C101.417 76.1181 98.8898 76.8881 96.8977 78.4818L87.9004 85.6797C85.9922 87.2063 84.459 89.1497 83.4184 91.3608L78.7478 101.286C77.6012 103.723 77.0881 106.409 77.256 109.097L77.2919 109.67C77.4291 111.866 77.1118 114.068 76.3597 116.136L73.5 124L72.1211 129.171C71.7093 130.715 71.5312 132.312 71.5926 133.909L71.9398 142.936C71.9799 143.976 71.9182 145.018 71.7559 146.046L70.5 154L69.1161 138.316C69.0388 137.44 69.0339 136.559 69.1013 135.683L69.8965 125.345C69.9654 124.45 70.1094 123.562 70.3271 122.691L74.5 106'
                    stroke='url(#paint8_radial)'
                  />
                </g>
                <g id='Vector 40' filter='url(#filter17_f)'>
                  <path
                    d='M130 191.5C130 191.5 125 186 126 185.5C127 185 140.243 189.462 148.5 185.5C142.977 183.924 142.216 183.384 139.5 180.5C154.095 180.659 165.363 182.181 180.5 175.5V171C181.042 165.197 181.841 161.285 183.5 154V149C183.5 149 184.5 146 185.5 145C186.5 144 187 146.5 187 146.5L191 135V141.5L187.5 150L188 154L187 155.5V159.5C187 159.5 188 160 188 161.5C188 163 185.5 170 185.5 170L184.5 176.5C184.5 176.5 181 184 176 187.5C171 191 150 197 144.5 196.5C139 196 135 193.5 135 193.5C135 193.5 143.5 202.5 141.5 202.5C139.5 202.5 130 196 129.5 194.5C129 193 130 191.5 130 191.5Z'
                    fill='url(#paint9_linear)'
                  />
                </g>
                <g id='Vector 39' filter='url(#filter18_f)'>
                  <path d='M96 89L79.5 108.5L86.5 90.5L96 89Z' fill='#4B9539' />
                </g>
                <g id='Vector 38' filter='url(#filter19_f)'>
                  <path
                    d='M66 143L60.9346 134.136C60.3632 133.136 60.4147 131.897 61.0673 130.948L64.9721 125.268C65.3159 124.768 65.5 124.175 65.5 123.568V122.243C65.5 121.447 65.8161 120.684 66.3787 120.121L72.5 114'
                    stroke='#C0DE7F'
                  />
                </g>
                <g id='Vector 37' filter='url(#filter20_f)'>
                  <path
                    d='M68 154.5C66.5985 146.399 66 131.5 65 134C65.0853 130.68 66.5 133 67 123'
                    stroke='#73C442'
                    strokeWidth='2'
                  />
                </g>
                <path
                  id='Vector 34'
                  d='M90.5 109L81 123.5L91.5 112.5L90.5 109Z'
                  fill='#8BD046'
                />
                <path
                  id='Vector 31'
                  d='M88.5 158L90.9102 160.066C91.631 160.684 92.236 161.425 92.6971 162.255L94.1344 164.842C94.3776 165.28 94.6613 165.694 94.9819 166.078L97 168.5L102.665 174.165C103.543 175.043 104.613 175.704 105.792 176.097L108.5 177'
                  stroke='#82C161'
                  strokeWidth='2'
                />
                <path
                  id='Vector 32'
                  d='M89 165L94.0499 171.886C94.3479 172.293 94.7106 172.647 95.1235 172.936L99.0311 175.672C99.2781 175.845 99.6211 175.758 99.756 175.488V175.488C99.8866 175.227 100.214 175.135 100.461 175.291L109.5 181'
                  stroke='#A2DF6D'
                  strokeWidth='2'
                />
                <path
                  id='Vector 29'
                  d='M84.5 154.5C82.8392 125.147 87.8412 111.715 109 94C109 94 92.875 98.5 85 119.5C77.125 140.5 84.5 154.5 84.5 154.5Z'
                  fill='#59B540'
                />
                <path
                  id='Vector'
                  d='M152.721 176.087L158.236 176.958C158.409 176.986 158.573 177.055 158.714 177.16C159.435 177.701 159.212 178.836 158.34 179.064L149 181.5L145.94 182.724C145.144 183.042 145.057 184.134 145.792 184.575C146.693 185.116 146.309 186.5 145.258 186.5H136.81C135.923 186.5 135.695 185.271 136.523 184.953C137.263 184.668 137.183 183.596 136.409 183.424L126.077 181.128C125.694 181.043 125.327 180.902 124.985 180.71L119.619 177.692C118.214 176.902 116.67 176.399 115.176 175.796C111.083 174.143 108.272 170.565 103.999 164.241C103.667 163.75 103.272 163.302 102.838 162.898C99.2487 159.566 97.3289 156.536 95.1565 151.374C94.7146 150.324 95.7877 149.295 96.829 149.757C97.6401 150.118 98.5626 149.561 98.6216 148.675L98.794 146.091C98.8443 145.335 97.8387 145.032 97.4632 145.689C97.2299 146.098 96.6723 146.172 96.3398 145.84L95.1525 144.653C94.7386 144.239 94.5273 143.664 94.5746 143.08L95.5926 130.524C95.8578 127.254 97.122 124.144 99.214 121.616L108 111L96.2882 123.519C94.4587 125.475 93.1493 127.859 92.4801 130.452L89.9112 140.407C89.6378 141.466 89.4705 142.553 89.4307 143.646C89.1285 151.939 89.613 158.684 90.8104 168.169C91.5042 173.664 95.0828 178.36 100.15 180.596L109 184.5L107.58 176.928C107.539 176.706 107.709 176.5 107.935 176.5C108.199 176.5 108.374 176.227 108.263 175.987L105.5 170C113.612 178.161 120.466 179.998 132.5 183.5L114 180.5L126.257 188.985C126.73 189.313 127.041 189.826 127.112 190.397C127.294 191.853 125.914 193.012 124.511 192.58L121.701 191.716C121.238 191.573 120.748 191.52 120.264 191.547C108.902 192.183 103.194 188.318 93.5 180L99.2554 191.922C99.8314 193.115 98.9621 194.5 97.6371 194.5C97.2249 194.5 96.8231 194.359 96.5084 194.093C92.2834 190.519 91.0388 187.398 89.5 181.5L85.2645 159.852C85.0885 158.952 84.989 158.037 84.9732 157.12C84.8412 149.462 85.0547 144.352 86.0795 136.546C86.3436 134.533 87.0261 132.597 88.0183 130.826C93.3992 121.227 96.5191 114.437 103.5 106.5L93.5 111L94.9731 108.264C96.3011 105.798 98.2259 103.671 100.707 102.371C107.127 99.0063 112.103 98.2655 117.237 99.8829C120.418 100.885 123.805 101.459 127 100.5C124.039 98.3636 120.858 96.8767 114 94C120.573 92.4121 124.478 92.172 131.469 95.9297C132.147 96.2941 132.905 96.5 133.674 96.5H136.563C137.832 96.5 138.791 95.3506 138.564 94.102L138.404 93.2212C138.215 92.18 139.164 91.2909 140.19 91.5475L141.143 91.7857C141.578 91.8945 142 91.5652 142 91.1163C142 90.6035 142.54 90.2699 142.998 90.4992L143.196 90.5982C143.629 90.8145 144.154 90.6149 144.334 90.1658L144.444 89.8912C144.719 89.2019 145.585 88.9787 146.16 89.4488L156 97.5L150 91C147.127 87.6479 137.078 85.9722 122.9 84.6702C121.87 84.5756 121.123 83.6388 121.269 82.6146C121.4 81.6979 122.204 81.0293 123.13 81.0679L132.24 81.4475C132.927 81.4761 133.5 80.9269 133.5 80.2392C133.5 79.3965 134.34 78.8121 135.13 79.1056L148.865 84.2071C150.275 84.7305 151.578 85.5186 152.644 86.5784C157.599 91.5042 159.948 95.6132 161.559 103.229C161.876 104.728 162.348 106.196 163.033 107.566L163.5 108.5V103.5C164.771 108.998 165.559 111.868 167.5 115.5C167.219 111.24 166.713 108.827 165.5 104.5C170.712 112.463 172.341 118.276 174.735 128.378C174.909 129.11 175.282 129.782 175.814 130.314C176.573 131.073 177 132.103 177 133.177V143.275C177 146.359 176.109 149.378 174.433 151.967L172.421 155.077C171.809 156.023 171.098 156.902 170.301 157.699L167.231 160.769C165.436 162.564 163.241 163.915 160.816 164.665C153.102 167.05 147.865 168.258 139.5 169.5C144.895 172.144 147.977 172.981 152.8 170.393C153.268 170.141 153.69 169.81 154.066 169.434C154.682 168.818 155.422 168.339 156.236 168.03C161.97 165.861 165.775 164.481 172.214 159.284C174.408 157.513 175.97 155.091 176.861 152.416L179.179 145.463C179.723 143.832 180 142.123 180 140.404V126.5C182.267 127.652 182.612 130.414 182.5 137C184.686 132.684 184.103 128.326 182.309 120.358C182.186 119.81 181.483 119.647 181.131 120.086C180.742 120.572 179.958 120.313 179.935 119.69L179.5 107.5L183 116.5L184 108.5L186.894 124.622C187.293 126.849 187.216 129.135 186.668 131.329L186.223 133.11C186.075 133.701 186 134.308 186 134.918V136.829C186 137.885 185.52 138.884 184.695 139.544C183.934 140.153 183.469 141.056 183.379 142.027C182.684 149.591 180.699 154.118 175.355 160.926C174.817 161.611 174.582 162.492 174.725 163.351C174.896 164.378 174.531 165.422 173.757 166.119L171.516 168.135C170.692 168.877 170.658 170.158 171.442 170.942C172.42 171.92 172.086 173.578 170.773 174.012C168.445 174.782 165.802 175.419 161.508 176.296C160.84 176.432 160.146 176.483 159.466 176.45C157.11 176.334 154.862 176.214 152.721 176.087Z'
                  fill='#8BD046'
                />
                <path
                  id='Vector_2'
                  d='M136.355 134.968L136.122 135.317C136.042 135.436 136 135.576 136 135.72C136 136.283 136.615 136.631 137.098 136.341L137.893 135.864C138.27 135.638 138.5 135.231 138.5 134.792V132.776C138.5 131.956 138.19 131.166 137.632 130.565L134.382 127.065C133.532 126.15 132 126.751 132 128.001V130.348C132 131.168 130.903 131.443 130.517 130.719L130.034 129.814C129.689 129.167 128.704 129.519 128.848 130.238C128.926 130.632 128.625 131 128.223 131H127.262C126.786 131 126.341 131.238 126.077 131.634L124.476 134.037C123.836 134.996 123.45 136.103 123.354 137.253L123.3 137.899C123.107 140.214 123.792 142.518 125.219 144.353C126.062 145.437 127.137 146.321 128.364 146.938L129.843 147.683C135.164 150.362 141.533 149.863 146.372 146.388L149 144.5C154.03 138.827 154.881 134.586 154.5 126C157.718 132.49 158.692 136.634 158 145.5C154.364 149.826 151.932 152.257 147.274 155.601C146.433 156.205 145.523 156.715 144.567 157.114C138.212 159.768 134.718 160.211 129.675 159.041C129.56 159.014 129.449 158.968 129.348 158.907L119.729 152.987C119.435 152.806 119.667 152.357 119.985 152.493C119.995 152.498 120 152.5 120.01 152.503C120.343 152.6 128.581 154.99 132.5 154.5C136.5 154 143.448 153.077 145 151.5C145 151.5 137 152.5 133 152.5C130.909 152.5 127.314 150.86 124.359 149.295C121.151 147.595 118.853 144.631 117.666 141.201L115 133.5C113.357 135.061 112.815 136.094 112 138C111.481 135.425 111.559 132.688 112.5 125C108.376 129.381 106.448 132.56 108.558 139.471C109.58 142.815 109.73 146.339 109.826 149.835C109.911 152.897 111.112 155.189 113.814 157.678C115.197 158.953 116.919 159.787 118.715 160.348L124 162C121.273 162.613 119.647 162.566 116.5 161.5C117.958 163.332 118.892 164.577 120.231 166.43C120.553 166.877 120.233 167.5 119.683 167.5C119.16 167.5 118.844 168.064 119.17 168.473C122.48 172.621 130.196 174.284 145 175C149.022 175.217 160.5 176.5 158.5 177C157.256 177.311 153.5 176.849 150.836 176.454C148.957 176.176 145.921 176.608 144.039 176.348C141.856 176.048 140.862 175.454 138.66 175.366L131.686 175.087C130.235 175.029 128.795 174.785 127.427 174.3C124.837 173.381 122.844 172.493 120.456 171.382C118.504 170.473 116.758 169.175 115.318 167.575L109.049 160.61C108.7 160.222 108.202 160 107.679 160C106.96 160 106.307 159.582 106.006 158.929L104.419 155.492C103.818 154.189 103.59 152.746 103.759 151.322L105.662 135.341C105.885 133.464 106.465 131.647 107.37 129.988L110.851 123.606C111.55 122.326 112.937 121.578 114.39 121.699L115.266 121.772C116.783 121.899 118.121 120.785 118.273 119.27C118.405 117.95 119.45 116.905 120.77 116.773L123.419 116.508C123.471 116.503 123.52 116.48 123.558 116.442C123.709 116.291 123.585 116.035 123.373 116.055C114.49 116.878 111.8 119.019 109.042 125.234C108.673 126.064 108.169 126.831 107.527 127.473L103.5 131.5C104.637 127.461 106.263 124.433 110.5 118C106.163 120.593 103.99 122.483 100.5 126.5C102.996 121.903 104.871 119.375 109.5 115C113.707 111.698 116.974 110.722 124.225 111.373C125.066 111.449 125.917 111.381 126.729 111.149C128.197 110.729 129.787 110.802 131.076 111.62C133.462 113.136 135.833 115.374 138.86 118.061C139.943 119.022 140.914 120.107 141.691 121.327C143.771 124.594 144.968 126.972 146.421 130.792C146.469 130.918 146.439 131.061 146.344 131.156C146.176 131.324 145.893 131.274 145.79 131.06C144.154 127.656 142.913 125.777 140 123L141.836 131.261C142.512 134.305 140.94 137.401 138.083 138.651L136.168 139.489C135.435 139.81 134.593 139.756 133.907 139.344C133.054 138.833 132.591 137.86 132.732 136.876L133.454 131.824C133.484 131.611 133.567 131.41 133.696 131.239C134.28 130.459 135.487 130.596 135.883 131.486L136.528 132.937C136.822 133.599 136.757 134.365 136.355 134.968Z'
                  fill='#3D7E2F'
                />
                <path
                  id='Vector 15'
                  d='M158.5 127.5L162.5 135.5L163.5 132.5C163.904 133.586 164.054 134.226 164 135.5C164.407 137.865 165.331 135.24 166.954 130.63L167 130.5C167.458 132.34 167.493 133.302 167.5 135C168.941 132.916 169.452 131.455 169.5 128C168.734 123.75 168.22 122.209 167 122.5L166 126C164.043 121.002 163.49 117.774 162.507 112.04L162.5 112C160.923 107.981 159.711 106.51 157.5 104C152.508 102.075 150.864 100.795 148 98.5C150.008 101.376 150.914 102.822 152 105C152 105 153.5 105 154.5 105.5C155.5 106 159.5 115.5 157.5 114.5C155.5 113.5 153.926 107.659 151.5 106.5C156.049 118.031 158.356 121.184 158.5 127.5Z'
                  fill='#3A7F31'
                />
                <path
                  id='Vector 16'
                  d='M157.5 124.5C154.904 119.858 153.241 117.392 149.5 113.5C150.85 116.879 152.829 119.149 153 122C154.721 121.27 155.062 122.033 157.5 124.5Z'
                  fill='#3B802E'
                />
                <path
                  id='Vector 17'
                  d='M174.826 141.105C172.311 149.732 169.399 153.684 163.509 159.5C163.213 159.792 162.753 159.835 162.408 159.605C161.942 159.294 161.884 158.63 162.284 158.238C167.839 152.788 170.648 148.856 173.164 140.63C173.334 140.073 173.994 139.829 174.478 140.152C174.789 140.36 174.931 140.747 174.826 141.105Z'
                  fill='#3D7E2F'
                />
                <path
                  id='Vector 18'
                  d='M135 176.5L113 172C118.57 179.273 125.413 180.514 136.5 183.5C134.73 185.3 131.845 185.204 127.5 185.5C138.614 188.841 143.869 189.327 151 187C146.102 186.298 143.681 185.775 144 183C152.103 181.54 156.816 180.767 160 178C151.837 172.871 145.994 173.246 135 176.5Z'
                  fill='#5BBE43'
                />
                <path
                  id='Vector 19'
                  d='M125 116C113.89 116.207 109.858 119.572 106 130.5L112.5 122C112.5 122 115.5 123 117.5 121.5C119.5 120 119 118 119 118L125 116Z'
                  fill='#5CBF45'
                />
                <g id='Vector 20'>
                  <path
                    d='M134.5 86C135.5 86.5 147.5 86.5 154 95C158.5 84 135.5 77.5 134 78.5C132.5 79.5 133 81.5 133 81.5C133 81.5 122 79 121 81C120 83 121.5 84 121.5 84C121.5 84 120 85 120.5 85.5C121 86 129.114 87.6683 134.5 87C134.5 87 133.5 85.5 134.5 86Z'
                    fill='#63C447'
                  />
                  <path
                    d='M134.5 86C135.5 86.5 147.5 86.5 154 95C158.5 84 135.5 77.5 134 78.5C132.5 79.5 133 81.5 133 81.5C133 81.5 122 79 121 81C120 83 121.5 84 121.5 84C121.5 84 120 85 120.5 85.5C121 86 129.114 87.6683 134.5 87C134.5 87 133.5 85.5 134.5 86Z'
                    fill='url(#paint10_linear)'
                  />
                </g>
                <g id='Vector 21' filter='url(#filter21_f)'>
                  <path
                    d='M142.171 128.808C143.056 138.097 137.241 141.28 133.584 139.987C132.711 139.679 131.573 139.855 131.159 140.682C130.804 141.392 131.142 142.229 131.92 142.382C133.881 142.766 137.725 143.046 142.5 141C147.458 138.875 145.813 132.092 143.778 128.062C143.047 126.613 142.018 127.192 142.171 128.808Z'
                    fill='#71C341'
                  />
                </g>
                <path
                  id='Vector 22'
                  d='M130.5 118C134.5 120 134.5 121.5 134 122'
                  stroke='#5CBF45'
                />
                <path
                  id='Vector 24'
                  d='M122.42 136.73L122.805 136.826C123.213 136.928 123.5 137.295 123.5 137.717C123.5 138.463 124.344 138.897 124.951 138.463L125.792 137.863C126.455 137.389 126.598 136.464 126.11 135.813L125.992 135.656C125.682 135.243 125.196 135 124.68 135H122.633C122.255 135 121.919 135.242 121.8 135.6C121.638 136.086 121.924 136.606 122.42 136.73Z'
                  fill='#5DC246'
                />
                <path
                  id='Vector 23'
                  d='M129.5 141L129 146C124.095 145.459 123.5 140.5 124 139C124.5 137.5 126.853 137.031 128.5 137.5C127.089 138.297 126.306 138.841 125 141C125.766 142.555 126.244 143.247 127.5 143V140C127.5 140 130.5 137.5 130.5 135.5C130.5 133.5 128.5 133 128.5 133L129 129C131.125 131.177 131.945 132.764 133 136L129.5 141Z'
                  fill='#C0DE7F'
                />
                <path
                  id='Vector 25'
                  d='M126.506 123.002L133.081 125.35C133.182 125.386 133.256 125.268 133.177 125.197C132.337 124.434 130.007 122.5 128 122.5C125.604 122.5 126.423 122.959 126.495 122.997C126.499 122.999 126.502 123.001 126.506 123.002Z'
                  fill='#72BE56'
                />
                <path
                  id='Vector 26'
                  d='M115 128.5C116.2 125.7 118.833 124.667 120 124.5'
                  stroke='#5BA541'
                />
                <path
                  id='Vector 27'
                  d='M127 90C116.709 92.2722 112.176 94.7284 104.5 99.5L109.5 94L101.5 94.5C110.16 90.1457 116.018 89.36 127 90Z'
                  fill='#B8DB76'
                />
                <path
                  id='Vector 28'
                  d='M130 89C133.6 89.8 135.5 92 136 93'
                  stroke='#77C548'
                />
                <path
                  id='Vector 30'
                  d='M97.5 105C86.1139 122.682 82.5202 133.353 84 155C79.5465 140.391 79.8058 132.259 90.471 113.094C87.4427 122.934 82.1463 127.111 82.5 139.5C83.9624 125.886 88.1366 118.36 97.5 105Z'
                  fill='#BBDB79'
                />
                <ellipse
                  id='Ellipse 1'
                  cx='98'
                  cy='169.5'
                  rx='2'
                  ry='1.5'
                  fill='white'
                />
                <g id='Vector 33' filter='url(#filter22_f)'>
                  <path
                    d='M84 123C78.6135 132.901 76.4862 138.69 74.5 149.5C73.1914 143.835 72.713 140.591 73 134.5V128C74.841 123.21 75.554 120.092 80.5 119.5C81.7618 113.861 83.4553 110.379 87 104C91.3229 98.0817 93.7304 95.621 98 92.5C91.2092 100.63 88.4553 104.686 85.5 111L89 108C84.8458 114.264 82.8085 118.792 79.5 128L84 123Z'
                    fill='#61B940'
                  />
                </g>
                <g id='Vector 35'>
                  <path
                    d='M110.5 86.5L91.5 91.5C91.5 91.5 95.5 85.5 101 84.5C106.5 83.5 110.5 86.5 110.5 86.5Z'
                    fill='#7BC543'
                  />
                  <path
                    d='M103.5 81C99.5 80.5 98 78.5 98 78.5C98 78.5 102.5 77 107.5 77C112.5 77 114.5 81 114.5 81C114.5 81 107.5 81.5 103.5 81Z'
                    fill='#7BC543'
                  />
                  <path
                    d='M111.5 83C110.5 82.5 105 82.5 105 82.5L105.5 83C106.5 84 111 84 111 84C111 84 112.5 83.5 111.5 83Z'
                    fill='#7BC543'
                  />
                </g>
                <g id='Vector 45' filter='url(#filter23_f)'>
                  <path d='M172 105L162 85M178 102L169 90' stroke='#70B248' />
                </g>
                <path
                  id='Vector 46'
                  d='M176 108.5C175 108 175 107.5 174.5 108C174 108.5 175 126 175.5 127C176 128 176.5 127 177 126.5C177.5 126 177 109 176 108.5Z'
                  fill='#8BD046'
                />
                <path
                  id='Vector 48'
                  d='M132 101C137.117 103.942 139.738 106.035 144 110.5'
                  stroke='#D1E59F'
                />
                <ellipse
                  id='Ellipse 89'
                  cx='163'
                  cy='192.387'
                  rx='0.884542'
                  ry='0.770535'
                  transform='rotate(114.19 163 192.387)'
                  fill='white'
                  fillOpacity='0.6'
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filter0_f'
              x='55.0894'
              y='91.5'
              width='13.5859'
              height='82'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter1_f'
              x='58.6709'
              y='38.6122'
              width='154.389'
              height='106.388'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter2_df'
              x='0.438129'
              y='0.695816'
              width='257.022'
              height='272.409'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='32' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.239216 0 0 0 0 0.494118 0 0 0 0 0.184314 0 0 0 1 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect2_foregroundBlur'
              />
            </filter>
            <filter
              id='filter3_f'
              x='62.1752'
              y='81.9924'
              width='18'
              height='15.5076'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter4_f'
              x='69.1752'
              y='60'
              width='39'
              height='23'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='2'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter5_f'
              x='146.175'
              y='190.5'
              width='55'
              height='31.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter6_f'
              x='102.175'
              y='45.5'
              width='30'
              height='12.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter7_f'
              x='168.175'
              y='133'
              width='48'
              height='73'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter8_f'
              x='162.675'
              y='194.905'
              width='34.5'
              height='19.4692'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='0.5'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter9_f'
              x='210.175'
              y='113.5'
              width='4.5'
              height='18.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='0.5'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter10_f'
              x='126.546'
              y='199.983'
              width='31.5092'
              height='21.911'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter11_f'
              x='66.5'
              y='33'
              width='160'
              height='161.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='12'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter12_f'
              x='123.403'
              y='141.811'
              width='90.097'
              height='71.1166'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter13_f'
              x='122'
              y='53.5'
              width='82.5'
              height='75.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='12'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter14_f'
              x='100.138'
              y='45.7292'
              width='111.797'
              height='153.172'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='2'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter15_f'
              x='77.1464'
              y='154.237'
              width='106.316'
              height='57.7172'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1.5'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter16_f'
              x='66.5542'
              y='73.0705'
              width='59.6489'
              height='83.0075'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter17_f'
              x='121.868'
              y='131'
              width='73.1322'
              height='75.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='2'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter18_f'
              x='76.5'
              y='86'
              width='22.5'
              height='25.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1.5'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter19_f'
              x='58.5394'
              y='112.146'
              width='15.8142'
              height='32.6016'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='0.75'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter20_f'
              x='62.0003'
              y='120.95'
              width='8.98503'
              height='35.7204'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter21_f'
              x='129.018'
              y='125.233'
              width='18.7452'
              height='19.4201'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter22_f'
              x='69.9197'
              y='89.5'
              width='31.0803'
              height='63'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1.5'
                result='effect1_foregroundBlur'
              />
            </filter>
            <filter
              id='filter23_f'
              x='159.553'
              y='82.7764'
              width='20.8472'
              height='24.4472'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1'
                result='effect1_foregroundBlur'
              />
            </filter>
            <linearGradient
              id='paint0_linear'
              x1='135.175'
              y1='189.5'
              x2='131.675'
              y2='34'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#95D254' />
              <stop offset='1' stopColor='#A5DC69' />
            </linearGradient>
            <radialGradient
              id='paint1_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(135.588 130.5) rotate(89.6174) scale(88.002 74.5423)'
            >
              <stop stopColor='#2C6325' />
              <stop offset='1' stopColor='#97D257' />
            </radialGradient>
            <radialGradient
              id='paint2_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(128.675 136.9) rotate(90) scale(72.2046 65)'
            >
              <stop stopColor='#2C6325' />
              <stop offset='1' stopColor='#4A9437' />
            </radialGradient>
            <linearGradient
              id='paint3_linear'
              x1='139.175'
              y1='207'
              x2='107.175'
              y2='212.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4E9D3A' />
              <stop offset='1' stopColor='#96D355' />
            </linearGradient>
            <linearGradient
              id='paint4_linear'
              x1='121.175'
              y1='218'
              x2='124.175'
              y2='205'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4E9D3A' />
              <stop offset='1' stopColor='#96D355' />
            </linearGradient>
            <linearGradient
              id='paint5_linear'
              x1='220.5'
              y1='163'
              x2='108'
              y2='61'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#BBD782' />
              <stop offset='1' stopColor='#8FCF47' />
            </linearGradient>
            <linearGradient
              id='paint6_linear'
              x1='148'
              y1='203.5'
              x2='213'
              y2='162'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#75C548' />
              <stop offset='1' stopColor='#C9E44E' />
            </linearGradient>
            <linearGradient
              id='paint7_linear'
              x1='136'
              y1='50'
              x2='199'
              y2='143.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.0136226' stopColor='#8ACC46' />
              <stop offset='1' stopColor='#C9E44E' />
            </linearGradient>
            <radialGradient
              id='paint8_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(96.5 114.5) rotate(90) scale(39.5 27.5)'
            >
              <stop offset='0.447917' stopColor='#30A201' />
              <stop offset='1' stopColor='#B7D974' />
            </radialGradient>
            <linearGradient
              id='paint9_linear'
              x1='153'
              y1='189'
              x2='189.5'
              y2='151.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#A3D84A' />
              <stop offset='1' stopColor='#6AC64C' />
            </linearGradient>
            <linearGradient
              id='paint10_linear'
              x1='135.5'
              y1='80'
              x2='155'
              y2='92'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#63C447' />
              <stop offset='1' stopColor='#8BD046' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

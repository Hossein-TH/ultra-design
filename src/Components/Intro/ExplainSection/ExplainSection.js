import React from 'react';
import './ExplainSection-Styles.css'
import {Button, Container} from "../../../globalStyles";
import {ImgWrapper, InfoColumn, InfoRow, TextWrapper} from "../../InfoSection/InfoSection-Styles";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  
  span {
    color: #5AFF3D;
  }
`;

const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;

const ExplainSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #101522;
`;

const ExplainSection = ({primary}) => {
    return (
        <ExplainSec>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading>
                                Clients give us <br/> <span>excellent quotes</span>
                            </Heading>
                            <Subtitle>
                                stay ahead of the curve with digital marketing trends. Our
                                leading the pack for computers.
                            </Subtitle>
                            <Link to="/register">
                                <Button big fontBig primary={primary}>
                                    Explore
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper>
                                <svg width="1058" height="785" viewBox="0 0 1058 785" fill="none" xmlns="http://www.w3.org/2000/svg" className="Svg">
                                    <g id="undraw_Ride_a_bicycle_2yok 1" clip-path="url(#clip0)">
                                        <path id="Vector" d="M192.802 112.432C187.322 119.082 185.212 128.432 182.852 137.222C163.852 208.062 117.032 265.042 63.7121 305.742C41.1321 322.982 13.6421 346.102 18.5821 377.012C21.2421 393.612 32.9121 405.832 41.5821 419.352C59.7721 447.662 65.6721 486.142 57.0021 520.032C47.1421 558.592 19.5821 594.572 28.1121 633.562C33.3721 657.562 51.2321 674.642 68.4021 689.322C95.1887 712.209 122.829 733.649 151.322 753.642C170.422 767.042 190.742 780.082 213.002 781.782C232.602 783.282 251.802 775.832 270.412 768.482C286.672 762.052 303.342 755.362 316.472 742.482C325.042 734.072 331.872 723.222 341.392 716.342C363.752 700.182 392.472 710.422 418.112 717.342C478.612 733.582 543.362 727.652 600.932 700.602C689.242 659.102 756.552 571.952 842.932 525.192C880.072 505.082 920.472 492.602 954.862 466.702C974.237 451.956 990.887 433.938 1004.06 413.462C1030.06 373.352 1044.12 322.212 1040.06 272.152C1036 222.092 1013.25 173.852 977.522 145.592C939.272 115.342 890.962 109.692 847.442 91.5322C802.502 72.7722 762.522 40.5322 718.012 20.4022C681.996 4.15881 642.8 -3.81499 603.3 -2.93422C563.8 -2.05344 524.998 7.65956 489.742 25.4922C441.302 49.9922 392.202 107.152 338.252 111.492C299.812 114.492 222.822 76.0122 192.802 112.432Z" fill="url(#paint0_linear)"/>
                                        <g id="Left-Wheel">
                                            <path id="Vector_2" d="M255.23 716.99L248.96 619.05L248.83 618.84L242.51 621.04L213.43 705.89L167.18 673.1L240.85 619.69L240.92 619.48L241.34 619.33L246.09 615.88L168.85 572.57L149.93 593.37L152.93 612.87L241.75 614.49V616.49L151.27 614.87L147.85 592.73L173.75 564.27L212.5 519.07L213.19 520.94L221.39 511.94L251.85 517.4V516.19L253.85 516.25V517.76L299.21 525.88L256.92 610.49L250.75 614.96V615.46V616.02L348.55 581.94L336.94 673.15L253.94 620.28L251.02 618.64L299.96 697.52L255.23 716.99ZM251.23 622.65L257.08 714.03L297.13 696.65L251.23 622.65ZM170.65 673.08L212.44 702.71L239.78 622.97L170.65 673.08ZM252.97 617.42L255.06 618.59L335.41 669.79L346.21 584.92L252.97 617.42ZM245.87 610.22L248.38 614.27L248.82 613.95L251.82 519.42L222.08 514.1L213.92 523.1L245.87 610.22ZM170.45 571.16L245.29 613.16L243.99 611.03L212.41 524.76L175.22 565.63L170.45 571.16ZM253.85 519.77L250.85 612.49L255.37 609.21L296.28 527.39L253.85 519.77Z" fill="#535461"/>
                                            <path id="Vector_3" d="M364.92 589.738C360.909 571.919 352.79 555.283 341.21 541.158C336.911 535.909 332.171 531.038 327.04 526.598C307.314 509.567 282.491 499.568 256.467 498.17C230.443 496.771 204.692 504.053 183.254 518.873C161.816 533.693 145.906 555.211 138.02 580.05C130.134 604.89 130.719 631.645 139.683 656.116C148.647 680.587 165.482 701.39 187.547 715.258C209.612 729.127 235.657 735.277 261.595 732.743C287.533 730.208 311.895 719.134 330.858 701.257C349.822 683.379 362.312 659.712 366.37 633.968C367.314 627.907 367.789 621.783 367.79 615.648C367.797 606.932 366.834 598.242 364.92 589.738ZM249.73 704.088C231.498 704.069 213.714 698.435 198.797 687.953C183.879 677.47 172.552 662.648 166.356 645.501C160.16 628.354 159.395 609.715 164.165 592.118C168.935 574.521 179.009 558.82 193.018 547.15C207.026 535.48 224.288 528.408 242.457 526.895C260.627 525.381 278.821 529.501 294.567 538.693C310.312 547.884 322.845 561.703 330.46 578.268C338.076 594.834 340.405 613.343 337.13 631.278C333.38 651.722 322.58 670.203 306.611 683.506C290.642 696.809 270.514 704.093 249.73 704.088V704.088Z" fill="#535461"/>
                                            <path id="Vector_4" d="M249.73 628.27C256.805 628.27 262.54 622.535 262.54 615.46C262.54 608.385 256.805 602.65 249.73 602.65C242.655 602.65 236.92 608.385 236.92 615.46C236.92 622.535 242.655 628.27 249.73 628.27Z" fill="#535461"/>
                                        </g>
                                        <g id="Right-Wheel">
                                            <path id="Vector_5" d="M681.42 717.39L675.16 619.49L675.03 619.28L668.71 621.48L639.62 706.29L593.37 673.49L667.06 620.08L667.13 619.87L667.55 619.72L672.3 616.27L595.06 572.96L576.13 593.76L579.13 613.26L667.93 614.84V616.84L577.45 615.22L574.05 593.11L599.94 564.66L638.66 519.49L639.35 521.36L647.55 512.36L678.09 517.83V516.62L680.09 516.68V518.19L725.45 526.31L683.12 610.96L676.95 615.43V615.93V616.49L774.76 582.41L763.15 673.62L680.15 620.75L677.23 619.11L726.17 698L681.42 717.39ZM677.42 623.05L683.27 714.43L723.32 697.05L677.42 623.05ZM596.85 673.49L638.64 703.12L665.98 623.38L596.85 673.49ZM679.17 617.83L681.26 619L761.61 670.2L772.41 585.33L679.17 617.83ZM672.07 610.63L674.58 614.68L675.02 614.36L678.02 519.83L648.28 514.49L640.12 523.49L672.07 610.63ZM596.68 571.58L671.52 613.58L670.22 611.45L638.64 525.18L601.44 566.06L596.68 571.58ZM680.05 520.19L677.05 612.88L681.57 609.6L722.48 527.78L680.05 520.19Z" fill="#535461"/>
                                            <path id="Vector_6" d="M676.33 498.61C665.717 498.598 655.15 500.024 644.92 502.85C639.644 504.305 634.477 506.133 629.46 508.32C602.73 519.907 581.247 540.997 569.167 567.508C557.087 594.019 555.269 624.069 564.065 651.843C572.86 679.618 591.644 703.143 616.782 717.869C641.921 732.594 671.627 737.473 700.155 731.562C728.682 725.65 754.004 709.369 771.221 685.867C788.438 662.365 796.327 633.312 793.362 604.33C790.396 575.348 776.787 548.495 755.168 528.966C733.548 509.438 705.454 498.622 676.32 498.61H676.33ZM675.93 704.7C655.649 704.692 635.981 697.746 620.192 685.017C604.404 672.288 593.445 654.541 589.135 634.723C584.825 614.905 587.424 594.209 596.501 576.073C605.577 557.936 620.584 543.45 639.03 535.02C643.722 532.872 648.594 531.142 653.59 529.85C665.802 526.68 678.549 526.147 690.984 528.287C703.418 530.427 715.253 535.191 725.703 542.261C736.153 549.332 744.977 558.547 751.588 569.293C758.199 580.039 762.446 592.069 764.046 604.585C765.646 617.1 764.562 629.812 760.866 641.875C757.17 653.939 750.948 665.077 742.613 674.548C734.277 684.02 724.02 691.608 712.524 696.806C701.028 702.005 688.557 704.696 675.94 704.7H675.93Z" fill="#535461"/>
                                            <path id="Vector_7" d="M675.93 628.67C683.005 628.67 688.74 622.935 688.74 615.86C688.74 608.785 683.005 603.05 675.93 603.05C668.855 603.05 663.12 608.785 663.12 615.86C663.12 622.935 668.855 628.67 675.93 628.67Z" fill="#535461"/>
                                        </g>
                                        <g id="Man-Bike">
                                            <path id="Vector_8" d="M387 554.303L344.293 512.159L330.947 525.683L373.654 567.827L387 554.303Z" fill="#0467FB"/>
                                            <path id="Vector_9" opacity="0.1" d="M387 554.303L344.293 512.159L330.947 525.683L373.654 567.827L387 554.303Z" fill="black"/>
                                            <path id="Vector_10" d="M354.48 491.99C354.48 491.99 379.27 478.91 388.85 470.49C394.617 465.444 400.818 460.917 407.38 456.96L438.48 438.03L503.48 433.03L506.48 444.03C506.48 444.03 511.48 460.03 461.48 474.03C411.48 488.03 386.48 510.03 386.48 510.03C386.48 510.03 354.48 520.99 354.48 491.99Z" fill="#DB8B8B"/>
                                            <path id="Vector_11" opacity="0.1" d="M389.13 507.86C387.36 509.21 386.48 509.99 386.48 509.99C386.48 509.99 354.48 520.99 354.48 491.99C354.48 491.99 356.03 491.17 358.48 489.8C360.955 493.831 364.423 497.16 368.551 499.469C372.679 501.778 377.33 502.99 382.06 502.99H385.45L389.13 507.86Z" fill="black"/>
                                            <path id="Vector_12" opacity="0.05" d="M505.54 449.55C502.76 455.44 493.17 465.12 461.48 473.99C420.87 485.36 396.75 501.99 389.13 507.86C387.36 509.21 386.48 509.99 386.48 509.99C386.48 509.99 354.48 520.99 354.48 491.99C354.48 491.99 356.03 491.17 358.48 489.8C365.91 485.73 381.64 476.8 388.82 470.45C394.586 465.403 400.787 460.875 407.35 456.92L438.45 437.99L450.03 437.1L503.45 432.99L506.45 443.99C506.45 443.99 507.15 446.14 505.54 449.55Z" fill="black"/>
                                            <path id="Vector_13" d="M354.98 485.49L328.48 502.99L406.08 567.99C406.08 567.99 417.48 560.99 411.48 552.99C411.48 552.99 391.48 535.99 390.48 511.99L384.48 503.99H381.09C375.358 503.991 369.767 502.211 365.089 498.897C360.412 495.583 356.88 490.898 354.98 485.49V485.49Z" fill="#ABB1D1"/>
                                            <path id="Vector_14" opacity="0.1" d="M505.54 449.55C489.54 441.82 450.48 440.99 450.48 440.99L450.06 437.1L503.48 432.99L506.48 443.99C506.48 443.99 507.15 446.14 505.54 449.55Z" fill="black"/>
                                            <path id="Vector_15" d="M450.48 438.99C450.48 438.99 497.48 439.99 509.48 449.99L503.48 328.99H438.48L450.48 438.99Z" fill="#ABB1D1"/>
                                            <path id="Vector_16" opacity="0.05" d="M450.48 438.49C450.48 438.49 497.48 439.49 509.48 449.49L503.48 328.49H438.48L450.48 438.49Z" fill="black"/>
                                            <path id="Vector_17" d="M488.24 364.95C488.24 364.95 605.89 360.95 608.29 376.16C610.69 391.37 490.64 384.96 490.64 384.96C490.64 384.96 481.04 375.35 488.24 364.95Z" fill="#535461"/>
                                            <path id="Vector_18" opacity="0.05" d="M488.24 364.95C488.24 364.95 605.89 360.95 608.29 376.16C610.69 391.37 490.64 384.96 490.64 384.96C490.64 384.96 481.04 375.35 488.24 364.95Z" fill="black"/>
                                            <path id="Vector_19" d="M393 425.78H372.19V606.66H393V425.78Z" fill="#0467FB"/>
                                            <path id="Vector_20" opacity="0.1" d="M393 425.77V439.7C386.08 440.6 379 441.17 372.19 441.39V425.77H393Z" fill="black"/>
                                            <path id="Vector_21" d="M391.44 410.78C388.52 410.554 385.616 410.164 382.74 409.61C371.46 407.45 343.02 402.92 335.37 410.61C325.77 420.21 328.97 437.02 354.58 439.42C380.19 441.82 424.21 435.42 433.02 425.81C433.02 425.77 417.09 412.75 391.44 410.78Z" fill="#535461"/>
                                            <path id="Vector_22" d="M387.4 475.4L605.9 407.37L613.1 424.18L389 501.01L387.4 475.4Z" fill="#0467FB"/>
                                            <path id="Vector_23" d="M452.23 582.65L609.9 427.38L618.7 440.18L468.23 597.05L452.23 582.65Z" fill="#0467FB"/>
                                            <path id="Vector_24" opacity="0.1" d="M653.58 529.85C648.584 531.142 643.712 532.872 639.02 535.02L629.46 508.31C634.477 506.123 639.644 504.295 644.92 502.84L653.58 529.85Z" fill="black"/>
                                            <path id="Vector_25" d="M680.33 608.26L669.13 614.66L590.99 396.33L587.49 386.56L605.9 376.15L610.51 390.53L680.33 608.26Z" fill="#0467FB"/>
                                            <path id="Vector_26" opacity="0.1" d="M610.51 390.53L590.99 396.33L587.49 386.56L605.9 376.15L610.51 390.53Z" fill="black"/>
                                            <path id="Vector_27" d="M491.44 407.37L601.09 369.75C601.09 369.75 620.3 372.15 613.09 388.16L502.65 420.97C502.65 420.97 485.85 422.57 491.44 407.37Z" fill="#535461"/>
                                            <path id="Vector_28" opacity="0.1" d="M367.79 615.86C367.789 621.994 367.314 628.119 366.37 634.18C356.77 633.49 346.85 632.49 337.13 631.49C339.289 619.599 339.021 607.394 336.34 595.61C345.81 593.61 355.48 591.7 364.92 589.97C366.833 598.467 367.795 607.15 367.79 615.86V615.86Z" fill="black"/>
                                            <path id="Vector_29" opacity="0.1" d="M393 585.38V606.65H372.19V588.65C379.39 587.4 386.39 586.29 393 585.38Z" fill="black"/>
                                            <path id="Vector_30" d="M258.54 615.49C258.54 615.49 426.62 571.49 440.22 588.28C453.82 605.07 468.23 627.49 425.85 635.49C383.47 643.49 255.37 621.88 255.37 621.88L258.54 615.49Z" fill="#0467FB"/>
                                            <path id="Vector_31" opacity="0.1" d="M341.21 541.37L319.85 560.92C316.067 556.064 311.791 551.614 307.09 547.64L327.03 526.81C332.164 531.249 336.908 536.12 341.21 541.37V541.37Z" fill="black"/>
                                            <path id="Vector_32" d="M252.94 606.66L378.59 475.4L382.6 505.81L259.34 618.66L252.94 606.66Z" fill="#0467FB"/>
                                            <path id="Vector_33" opacity="0.1" d="M448.22 628.27C462.364 628.27 473.83 616.804 473.83 602.66C473.83 588.516 462.364 577.05 448.22 577.05C434.076 577.05 422.61 588.516 422.61 602.66C422.61 616.804 434.076 628.27 448.22 628.27Z" fill="black"/>
                                            <path id="Vector_34" d="M449.83 628.27C463.974 628.27 475.44 616.804 475.44 602.66C475.44 588.516 463.974 577.05 449.83 577.05C435.686 577.05 424.22 588.516 424.22 602.66C424.22 616.804 435.686 628.27 449.83 628.27Z" fill="#535461"/>
                                            <path id="Vector_35" d="M442.992 600.736L442.984 600.742C439.977 602.991 439.362 607.253 441.611 610.26L461.937 637.441C464.186 640.448 468.448 641.063 471.455 638.814L471.463 638.808C474.471 636.559 475.085 632.297 472.836 629.29L452.51 602.109C450.261 599.102 446 598.487 442.992 600.736Z" fill="#0467FB"/>
                                            <path id="Vector_36" d="M565.48 246.99L563.1 277.1C562.826 280.914 562.876 284.744 563.25 288.55C563.56 291.92 563.25 297.82 559.95 306.82C555.713 318.317 553.523 330.467 553.48 342.72V376.99L530.48 372.99C530.48 372.99 531.48 324.99 527.48 316.99C523.48 308.99 530.48 237.99 530.48 237.99L565.48 246.99Z" fill="#DB8B8B"/>
                                            <path id="Vector_37" d="M451.5 476.99L442.85 526.19C441.759 532.759 440.086 539.218 437.85 545.49C432.78 559.35 436.02 578.78 438.48 589.38C439.57 594.06 440.48 597.02 440.48 597.02L414.48 611.02L406.48 605.02V601.02L405.48 512.02C399.48 498.02 401.48 477.02 405.48 469.02C406.617 466.392 407.417 463.63 407.86 460.8C409.86 450.08 410.48 435.02 410.48 435.02C410.48 435.02 426.48 408.02 445.48 426.02C452.48 432.65 455.14 441.32 455.7 449.62C456.68 463.83 451.5 476.99 451.5 476.99Z" fill="#DB8B8B"/>
                                            <path id="Vector_38" opacity="0.1" d="M455.7 449.59C441.83 457.83 417.7 460.16 407.86 460.77C409.86 450.05 410.48 434.99 410.48 434.99C410.48 434.99 426.48 407.99 445.48 425.99C452.48 432.62 455.14 441.29 455.7 449.59Z" fill="black"/>
                                            <path id="Vector_39" d="M489.48 424.99C478.846 430.653 468.797 437.352 459.48 444.99C443.48 457.99 403.48 458.99 403.48 458.99V443.99C404.48 425.99 387.48 405.99 364.48 349.99C349.79 314.23 353.86 293.99 358.72 283.99C361.48 278.34 364.48 275.99 364.48 275.99L489.48 299.99L493.95 313.39L503.48 341.99C503.48 341.99 468.48 343.99 462.48 346.99C456.48 349.99 460.48 376.99 460.48 376.99C454.48 404.99 489.48 424.99 489.48 424.99Z" fill="#ABB1D1"/>
                                            <path id="Vector_40" opacity="0.1" d="M565.48 246.99L564.3 261.91C546.9 266.91 534.48 250.99 534.48 250.99C532.665 251.477 530.882 252.074 529.14 252.78C529.89 244.03 530.48 237.99 530.48 237.99L565.48 246.99Z" fill="black"/>
                                            <path id="Vector_41" opacity="0.1" d="M493.95 313.39C493.48 318.06 493.48 320.99 493.48 320.99C493.48 320.99 470.48 339.99 431.48 310.99C392.48 281.99 357.48 289.99 357.48 289.99C357.48 289.99 357.89 287.67 358.72 283.99C361.48 278.34 364.48 275.99 364.48 275.99L489.48 299.99L493.95 313.39Z" fill="black"/>
                                            <path id="Vector_42" d="M578.96 201.94C576.35 222.29 575.48 247.94 575.48 247.94C552.48 265.94 534.48 242.94 534.48 242.94C512.76 248.77 502.55 267.78 497.74 284.37C495.164 293.344 493.732 302.607 493.48 311.94C493.48 311.94 487.4 316.94 476.2 317.94C465.61 318.83 450.43 316.07 431.48 301.94C392.48 272.94 357.48 280.94 357.48 280.94C357.48 280.94 364.48 240.94 380.48 228.94C396.48 216.94 408.48 201.94 428.48 155.94C448.48 109.94 489.48 120.94 489.48 120.94C489.48 120.94 491.48 111.94 528.48 120.94C537.492 123.302 545.834 127.721 552.85 133.85C572.64 150.49 582.24 176.3 578.96 201.94Z" fill="white"/>
                                            <path id="Vector_43" d="M541.85 149.49C541.8 150.82 541.69 152.3 541.51 153.95C539.51 171.95 537.51 169.95 515.51 173.95C501.83 176.44 494.72 165.01 491.3 156.01C490.062 152.75 489.128 149.382 488.51 145.95L536.51 137.95C536.51 137.95 542.26 136.34 541.85 149.49Z" fill="#DB8B8B"/>
                                            <path id="Vector_44" d="M427.48 217.99L449.48 270.99C449.48 270.99 451.48 286.99 461.48 295.99C461.48 295.99 476.48 311.99 478.48 320.99C480.48 329.99 508.48 353.99 508.48 353.99C508.48 353.99 534.48 377.99 536.48 386.99C536.48 386.99 560.48 393.99 557.48 407.99C557.48 407.99 575.48 389.99 557.48 372.99C539.48 355.99 515.48 320.99 515.48 320.99C515.48 320.99 501.48 283.99 488.48 272.99L484.48 261.99C484.48 261.99 490.48 229.99 470.48 214.99C450.48 199.99 427.48 217.99 427.48 217.99Z" fill="#DB8B8B"/>
                                            <path id="Vector_45" opacity="0.1" d="M440.48 596.99L414.48 610.99L406.48 604.99V600.99C415.464 600.352 424.193 597.718 432.03 593.28C434.43 591.92 436.69 590.58 438.5 589.4C439.55 594.03 440.48 596.99 440.48 596.99Z" fill="black"/>
                                            <path id="Vector_46" opacity="0.1" d="M470.48 175.99L484.48 230.99C484.48 230.99 441.48 237.99 432.48 230.99C423.48 223.99 406.48 221.99 406.48 221.99C406.48 221.99 424.48 169.99 434.48 163.99C444.48 157.99 470.48 175.99 470.48 175.99Z" fill="black"/>
                                            <path id="Vector_47" d="M470.48 173.99L484.48 228.99C484.48 228.99 441.48 235.99 432.48 228.99C423.48 221.99 406.48 219.99 406.48 219.99C406.48 219.99 424.48 167.99 434.48 161.99C444.48 155.99 470.48 173.99 470.48 173.99Z" fill="white"/>
                                            <path id="Vector_48" opacity="0.1" d="M541.85 148.49C539.049 152.356 535.487 155.609 531.383 158.047C527.278 160.485 522.718 162.058 517.983 162.669C513.248 163.28 508.439 162.915 503.85 161.598C499.261 160.281 494.99 158.039 491.3 155.01C490.062 151.75 489.128 148.382 488.51 144.95L536.51 136.95C536.51 136.95 542.26 135.34 541.85 148.49Z" fill="black"/>
                                            <path id="Vector_49" d="M548.48 126.99C548.48 136.273 544.793 145.175 538.229 151.739C531.665 158.303 522.763 161.99 513.48 161.99C504.197 161.99 495.295 158.303 488.731 151.739C482.168 145.175 478.48 136.273 478.48 126.99C478.48 126.41 478.48 125.83 478.48 125.25C478.711 115.967 482.62 107.157 489.346 100.756C496.073 94.3555 505.067 90.8893 514.35 91.12C523.633 91.3508 532.443 95.2595 538.844 101.986C545.245 108.713 548.711 117.707 548.48 126.99V126.99Z" fill="#DB8B8B"/>
                                            <path id="Vector_50" opacity="0.1" d="M548.48 126.99C548.483 130.216 548.039 133.426 547.16 136.53C544.455 137.12 541.633 136.861 539.08 135.79C535.34 134.32 532.13 131.79 528.54 129.97C518.43 124.85 506.4 125.86 495.2 127.55C489.64 128.39 483.33 129.17 478.96 125.63C478.81 125.511 478.666 125.385 478.53 125.25C478.761 115.967 482.67 107.157 489.396 100.756C496.123 94.3555 505.117 90.8893 514.4 91.12C523.683 91.3508 532.493 95.2595 538.894 101.986C545.295 108.713 548.761 117.707 548.53 126.99H548.48Z" fill="black"/>
                                            <path id="Vector_51" opacity="0.05" d="M384.98 234.49C384.98 234.49 410.98 241.49 418.98 259.49C426.98 277.49 448.62 280.78 448.62 280.78" fill="black"/>
                                            <path id="Vector_52" d="M482.98 630.49H422.98V649.49H482.98V630.49Z" fill="#0467FB"/>
                                            <path id="Vector_53" opacity="0.1" d="M482.98 630.49H422.98V649.49H482.98V630.49Z" fill="black"/>
                                            <path id="Vector_54" d="M431.99 595.23C437.36 592.23 442.07 589.23 442.48 587.99C442.48 587.99 456.03 602.29 468.1 606.73C472.159 608.229 476.044 610.16 479.69 612.49C484.47 615.49 491.29 619.02 497.48 619.02C497.48 619.02 511.48 631.02 484.48 633.02C457.48 635.02 394.48 628.02 394.48 628.02L398.48 603.02C410.167 603.705 421.804 601 431.99 595.23Z" fill="#ABB1D1"/>
                                        </g>
                                        <g id="Hat">
                                            <path id="Vector_55" d="M453.624 104.927C455.754 111.607 465.984 111.817 471.234 116.737C473.964 119.297 475.234 123.077 478.234 125.357C482.404 128.537 488.424 127.837 493.734 127.077C504.424 125.557 515.904 124.647 525.544 129.257C528.964 130.887 532.034 133.167 535.604 134.497C539.174 135.827 543.604 135.987 546.504 133.627C548.824 131.737 549.674 128.627 551.774 126.547C553.404 124.907 555.674 123.987 557.534 122.547C561.614 119.467 563.374 114.447 564.534 109.647C566.934 99.7667 567.624 89.1167 563.534 79.7467C559.444 70.3767 549.604 62.7467 538.864 63.2367C535.574 63.3867 532.364 64.2367 529.084 64.5967C520.534 65.4667 512.084 62.5967 503.504 62.1067C501.015 61.8039 498.49 62.1483 496.174 63.1067C494.427 64.0775 492.92 65.4273 491.764 67.0567C487.836 72.2021 485.146 78.1836 483.904 84.5367C482.904 89.3267 482.854 93.6667 476.984 94.4067C470.314 95.2867 449.114 90.7967 453.624 104.927Z" fill="#472727"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="897.5" y1="113.5" x2="117.5" y2="629.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#63FFFF"/>
                                            <stop offset="1" stop-color="#AC60F9"/>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                            <rect width="1057.7" height="784.98" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </ExplainSec>
    );
};

export default ExplainSection;

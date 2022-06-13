import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const VisionTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const VisionContent = styled.div`
margin-top: 15px;
`;

const TermsOfUse = () => {


    return (
        <Container>
        
        <VisionTitle>Terms Of Use</VisionTitle>
        
        <VisionContent>
        Exo Solaria Union, LLC. maintains this website, any courses offered and other linked and related sites (the “Site”) for the use of its customers, members, students, and other Site users (“Users”) upon agreement to the following terms. Please read the terms carefully before using the Site. Use of this website indicates acceptance of these “Terms of Use” and forms a binding agreement between you and Exo Solaria Union, LLC. If you do not agree to these terms, do not use this Site.

‍

1. Use of Site

Exo Solaria Union, LLC. provides various learning materials, information, quizzes, tests, questions, articles, news and other information on this and related sites and in courses offered through this site (the “Materials”). Exo Solaria Union, LLC. authorizes each User to view the materials. Users may not modify the Materials at this Site in any way or reproduce, share or distribute them. Users will keep all Materials confidential, and will not sell, auction, loan, rent, give away, describe, summarize, or otherwise reveal the Materials or their contents, to any other person or entity. Any breach of these Terms of Use automatically terminates your authorized use of the Site.

Use of Communities: Our Communities are a safe space to discuss various space related topics and Company Missions. We want everyone to be part of our community and have their voice heard. We encourage your feedback and aim to respond to your comments as soon as possible. While we do moderate this community, we welcome open discussion. To help everyone enjoy our community, we ask that when you post, you must agree to the following:

Rule 1: We don’t allow defamatory, indecent, offensive, profane, discriminatory, misleading, unlawful or threatening comments or content.

Rule 2: Personal attacks, name-calling, trolling, cyber-bullying, hate speech, racist speech, and abuse will not be tolerated. Please be respectful, kind, and courteous.

Rule 3: Spamming, posting promotional material or posting links to third party websites is not permitted.

Rule 4: We reserve the right to delete comments at our discretion and block any repeat offenders. We will remove content that is fraudulent, deceptive or misleading.

Rule 5: Coordinated group attacks will not be tolerated.

Rule 6: Respect that other people in the community have had different life experiences and may have a different perspective to yours. We welcome different viewpoints and diversity. Together we are stronger.

Rule 7: Our community is a public place. Don’t post personal information that you would not be comfortable sharing with a stranger. We recommend that you don’t post any information that may identify you or anyone else, such as your address, email address or phone number.

‍

2. User Warranty of Intent

As a User you warrant that you are not an agent or employee of any other entity that would seek to harm the Exo Solaria Union, LLC.

‍

3. Trademark and Copyright

Exo Solaria Union, LLC., and certain other brands, trademarks, and service marks are marks of Exo Solaria Union, LLC. and its affiliates. The Materials on this Site are copyrighted, and any unauthorized use of any Materials on this Site may violate copyright, trademark, and other laws.

‍

4. Hyperlinks

Links to external websites are provided solely as a convenience to you. Exo Solaria Union, LLC. has not reviewed all of these external websites, does not control and is not responsible for any of these sites or their content. If you decide to access any of the external websites linked to this Site, you do so entirely at your own risk.

‍

5. No Warranty

The Materials provided at this site are provided “as is” without any warranties of any kind including warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. Exo Solaria Union, LLC. further does not warrant the accuracy and completeness of the Materials at this Site. Exo Solaria Union, LLC. may make changes to the Materials at this Site, or to the services and prices described in them, at any time without notice. The Materials at this Site may be out of date, and Exo Solaria Union, LLC. makes no commitment to update the Materials at this Site.

‍

6. Limitation of Liability

In no event will Exo Solaria Union, LLC., its suppliers, or other third parties mentioned at this Site be liable for any damages whatsoever (including, without limitation, those resulting from interruption of services or inaccurate information) arising out of the use, inability to use, or the results of the use of this Site, any websites liked to this Site, or the Materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages. If your use of the Materials or information from this Site results in the need for servicing, repair or correction of equipment or data, you assume all costs thereof.

‍

7. Applicable Law

The Terms of Use are governed by the laws of the State of Florida in the United States of America. Failure to enforce strict performance of the Terms of Use of Use shall not be construed as a waiver of any provision or right. Exo Solaria Union, LLC. may assign its rights and duties under the Terms of Use without notice to any party at any time.



8. Monthly Membership Payments

Monthly Membership payments made to Exo Solaria Union LLC are used for operating costs and expenses, to develop member benefits, to develop mission projects, and for profit.

‍

9. Effective Date and Updates

These Terms of Use are effective as of May 18th, 2021 and are subject to change without notice by Exo Solaria Union, LLC. at any time. Please check for changes regularly. Your use of this Site after such changes constitutes your agreement to such changes.
        </VisionContent>
    </Container>
    );
};

export default TermsOfUse;
import React, {Component} from 'react';
import FaExternalLink from 'react-icons/lib/fa/external-link';

const icoStyles = {
    color: '#26c17e',
    size: 20
};

export const tabsData = [
        {
            img: 'http://lorempixel.com/250/250/business/',
            title: "All",
            link: "epam.com",
            ico: <FaExternalLink {...icoStyles}/>,
            content: `Apple Inc. is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services. The company's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, and the Apple TV digital media player. Apple's consumer software includes the macOS and iOS operating systems, the iTunes media player, the Safari web browser, and the iLife and iWork creativity and productivity suites. Its online services include the iTunes Store, the iOS App Store and Mac App Store, Apple Music, and iCloud.`,
        },
        {
            img: 'http://lorempixel.com/250/250/business/',
            title: "Code",
            link: "epam.com",
            ico: <FaExternalLink {...icoStyles}/>,
            content: `Google is an American multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, in California. Together, they own about 14 percent of its shares, and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its new headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google, Alphabet's leading subsidiary, will continue to be the umbrella company for Alphabet's Internet interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page, who became CEO of Alphabet.`,
        },
        {
            img: 'http://lorempixel.com/250/250/business/',
            title: "Ui",
            link: "epam.com",
            ico: <FaExternalLink {...icoStyles}/>,
            content: `Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes`,
        },
];
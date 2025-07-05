import React from 'react';
import Link from 'next/link';
import routes from '@/config/routes';
import { capitalCase } from 'change-case';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface FooterProps {}

const footerLinks = {
  company: [
    { name: 'The Linktree Blog', href: '#' },
    { name: 'Engineering Blog', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: "What's New", href: '#' },
    { name: 'About', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Link in Bio', href: '#' },
    { name: 'Social Good', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  community: [
    { name: 'Linktree for Enterprise', href: '#' },
    { name: '2023 Creator Report', href: '#' },
    { name: '2022 Creator Report', href: '#' },
    { name: 'Charities', href: '#' },
    { name: "What's Trending", href: '#' },
    { name: 'Creator Profile Directory', href: '#' },
    { name: 'Explore Templates', href: '#' }
  ],
  support: [
    { name: 'Help Topics', href: '#' },
    { name: 'Getting Started', href: '#' },
    { name: 'Linktree Pro', href: '#' },
    { name: 'Features & How-Tos', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Report a Violation', href: '#' }
  ],
  trustAndLegal: [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Notice', href: '#' },
    { name: 'Cookie Notice', href: '#' },
    { name: 'Trust Center', href: '#' },
    { name: 'Cookie Preferences', href: '#' },
    { name: 'Transparency Report', href: '#' },
    { name: 'Law Enforcement Access Policy', href: '#' }
  ]
};

const socials = [
  { name: 'Facebook', href: '#', icon: <FaFacebook /> },
  { name: 'Instagram', href: '#', icon: <FaInstagram /> },
  { name: 'Twitter', href: '#', icon: <FaTwitter /> },
  { name: 'WhatsApp', href: '#', icon: <FaWhatsapp /> },
  { name: 'YouTube', href: '#', icon: <FaYoutube /> }
];
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="space-y-6 m-6 p-8 bg-white rounded-2xl dark:bg-white text-gray-700 dark:text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="space-y-3">
            <p className="text-lg font-medium text-gray-800">{capitalCase(section?.replaceAll('And', '&'))}</p>
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-gray-600">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 ">
        <div className="flex gap-x-2">
          <Button asChild variant="secondary" className="p-5 text-md bg-gray-300 text-gray-800">
            <Link href={routes.login} className="">
              Login
            </Link>
          </Button>
          <Button asChild className="rounded-3xl bg-lime-300 text-md p-5">
            <Link href={routes.register} className="text-gray-800">
              Get started for Free
            </Link>
          </Button>
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-2">
          {socials.map((social) => (
            <Button key={social.name} asChild className="p-2 rounded-full" size={'icon'}>
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

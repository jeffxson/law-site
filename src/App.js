import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./component/navbar";
import { HashLink as Link } from "react-router-hash-link";
import { SiWorldhealthorganization } from "react-icons/si";
import { BsBank2, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiFileCopy2Line } from "react-icons/ri";
import { GiInjustice } from "react-icons/gi";
import { GoQuote } from "react-icons/go";
import laeimg from "./newlaw.png";

import {
  MdCheckCircle,
  MdFamilyRestroom,
  MdOutlineGavel,
} from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import Scroll6 from "./component/Scroll/scroll6";
import Scroll4 from "./component/Scroll/Scroll4";
import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [scrolled]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0 && !scrolled) {
      setScrolled(true);
    } else if (scrollTop === 0 && scrolled) {
      setScrolled(false);
    }
  };

  const scrollTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div style={{ position: "fixed", bottom: 25, right: 25 }}>
        {scrolled ? (
          <Button
            as={IconButton}
            aria-label="Options"
            icon={<BsArrowUpCircleFill />}
            bg="#b4816b"
            color="white"
            onClick={scrollTop}
          ></Button>
        ) : (
          ""
        )}
      </div>
      <div style={{ width: "100%" }}>
        <NavBar />
        <Home />
        <Scroll4>
          <div id="service">
            <Service />
          </div>
        </Scroll4>

        <div id="profile">
          <Profile />
        </div>

        <div id="testimony">
          <Testimonials />
        </div>
        <div id="book">
          <Book />
        </div>
        <div id="contact">
          <TermsPolicy />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
export const Home = () => {
  return (
    <Box
      backgroundImage="url('./ladyjustice.jpg')"
      height="100vh"
      backgrounRrepeat="no-repeat"
      backgroundSize="auto"
      pt="50px"
    >
      <Box display={["grid", "grid", "flex", "flex"]} color="white">
        <Box
          m="auto"
          w={["400px", "400px", "70%", "70%"]}
          p={["10px", "10px", "100px", "100px"]}
          pt={["150px", "150px", "100px", "100px"]}
          fontSize={["22px", "22px", "25px", "25px"]}
          mt="20px"
        >
          <b>
            <Scroll6>
              WILLIAM DUDLEY is a highly reputable law firm that specializes in
              highly complex immigration cases, Bankruptcy, Criminal Law,
              Divorce and Family and more. They have attorneys in three New York
              City locations, and their attorneys are licensed to practice
              immigration law in all 50 U.S. states.{" "}
            </Scroll6>
          </b>
        </Box>
        <Box m="auto" w="30%" d={["none", "none", "grid", "grid"]}></Box>
      </Box>
    </Box>
  );
};
export const Service = () => {
  return (
    <Box m="60px" mt="-80px" pb="80px">
      <Heading size="lg" mb="30px">
        Full-service legal solutions
      </Heading>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <SiWorldhealthorganization size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b> Immigration Cases</b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play a critical role in helping individuals and companies
            navigate the complex US immigration system and ensuring that their
            clients' legal rights are protected. assist with filling out and
            submitting the necessary immigration forms and supporting
            documentation
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <BsBank2 size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b> Bankruptcy</b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play a critical role in helping individuals and companies
            navigate the complex US immigration system and ensuring that their
            clients' legal rights are protected. assist with filling out and
            submitting the necessary immigration forms and supporting
            documentation
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <GiInjustice size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b> Criminal Law</b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play Investigate and build a defense, Represent clients in court,
            Assist with appeals Overall, we play a critical role in protecting
            their clients' rights and ensuring a fair and just criminal justice
            system. They provide legal advice, representation, and protection to
            clients throughout the criminal justice process
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <MdFamilyRestroom size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b>Divorce and Family Cases</b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play a critical roleplay a critical role in helping clients
            navigate the complex and emotionally charged process of divorce and
            other family law matters. They provide legal advice, representation,
            and protection to clients throughout the legal process
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <MdOutlineGavel size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b>Arbitration and Mediation </b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play a critical role in helping clients resolve legal disputes
            outside of the courtroom through alternative dispute resolution
            methods. They provide legal advice, representation, and facilitation
            to clients throughout the mediation or arbitration process.
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <RiFileCopy2Line size="40px" />
          <Text color="gray" fontSize="17px" mt="20px">
            <b>Tax and Estate Planning </b>
          </Text>
          <Text fontSize="12px" pr="20px">
            We play a critical role in helping clients plan for their financial
            future and protect their assets. They provide legal advice,
            representation, and protection to clients on matters related to tax
            law and estate planning.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export const Profile = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const lawyers = [
    {
      name: "Craig F. Arcella",
      role: "Partner",
      practice: "Tax",
      email: "carcella@cravath.com",
      education:
        "J.D., 1998, Columbia Law School (Harlan Fiske Stone Scholar); B.A., 1995, Duke University",
      img: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "Senior Associate",
      practice: "Corporate Law",
      email: "smartinez@lawfirm.com",
      education:
        "J.D., 2010, Harvard Law School; B.A., 2006, University of California, Berkeley",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Michael Chen",
      role: "Partner",
      practice: "Intellectual Property",
      email: "mchen@lawfirm.com",
      education:
        "J.D., 2005, Yale Law School; B.S., 2001, MIT (Computer Science)",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Associate",
      practice: "Litigation",
      email: "ejohnson@lawfirm.com",
      education:
        "J.D., 2016, NYU School of Law; B.A., 2012, Princeton University",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "David O’Connor",
      role: "Partner",
      practice: "Mergers & Acquisitions",
      email: "doconnor@lawfirm.com",
      education:
        "J.D., 2002, University of Chicago Law School; B.A., 1998, Georgetown University",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Aisha Patel",
      role: "Associate",
      practice: "International Arbitration",
      email: "apatel@lawfirm.com",
      education:
        "J.D., 2018, Stanford Law School; B.A., 2014, London School of Economics",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];
  return (
    <>
      <Box bg="#eceff2" p="60px">
        <Heading size="lg" mb="60px">
          Onboard lawyers Profile
        </Heading>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {lawyers.map((lawyer, index) => (
            <Box
              key={index}
              maxW="md"
              mb="50px"
              border="1px solid transparent"
              bg="white"
              p="20px"
              borderRadius="8px"
            >
              <Flex spacing="4" mb="40px">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={lawyer.name} src={lawyer.img} />
                  <Box>
                    <Heading size="sm">
                      {lawyer.name}, {lawyer.role}
                    </Heading>
                    <Text>{lawyer.practice}</Text>
                    <Text>{lawyer.email}</Text>
                  </Box>
                </Flex>
              </Flex>
              <Text>{lawyer.education}</Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        backgroundImage="url('./mainwe.png')"
        height={["100vh", "100vh", "70vh", "70vh"]}
        backgroundRepeat="no-repeat"
        backgroundSize="auto"
        backgroundPosition="center"
        p="80px"
      >
        <Heading size="lg" mb="30px" color="white">
          Why work with us
        </Heading>
        <Scroll4>
          <List
            spacing={6}
            fontSize="20px"
            fontWeight="700"
            mt="-60px"
            color="white"
          >
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#b4816b" />
              We know and understand the law
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#b4816b" />
              We have decades of legal experience
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#b4816b" />
              We are your advocate
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#b4816b" />
              We provide the counsel you need
            </ListItem>
          </List>
          <Link to="testimony" scroll={(el) => scrollWithOffset(el, -150)}>
            <Button
              mt="20px"
              bg="transparent"
              border="2px solid white"
              color="white"
              borderRadius="10px"
              p="20px"
              _hover={{ background: "#b4816b", border: "2px solid #b4816b" }}
              _active={{ background: "#b4816b", border: "2px solid #b4816b" }}
              _focus={{ background: "#b4816b", border: "2px solid #b4816b" }}
            >
              Book a consultation
            </Button>
          </Link>
        </Scroll4>
      </Box>
    </>
  );
};
export const Testimonials = () => {
  return (
    <>
      <Box
        p={["10px", "10px", "80px", "80px"]}
        pt="40px"
        bg="#b4816b"
        color="white"
        pb="30px"
        mt={["-45px", "-45px", "0", "0"]}
      >
        <Box display={["grid", "grid", "flex", "flex"]}>
          <Box
            w={["90%", "90%", "60%", "60%"]}
            display={["grid", "grid", "grid", "grid"]}
          >
            <Heading size="lg" mb="30px">
              Client Testimonials
              <Heading size="md" color="#724e3f" mb="30px">
                <br></br>
                We are honored to serve you
              </Heading>
            </Heading>
          </Box>

          <List
            w={["90%", "90%", "40%", "40%"]}
            spacing={6}
            fontSize="14px"
            fontWeight="300"
            color="white"
            mt="-110px"
            mb="60px"
            pb="100px"
          >
            <Scroll4>
              <ListItem display="flex" mt="50px">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  Matt Cadwell helped me finish a long time case I’ve been
                  trying to wrap up for years. He was completely understanding,
                  professional and worked very diligently to the end and I’m so
                  grateful! Highly recommend!!
                  <br></br>
                  <b> -KIMBERLY</b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  Our lawyer, Matt, was outstanding. Calm, patient, reasonable
                  in the turmoil we were going through. We would definitely use
                  Boyd Law again although we hope not to have .<br></br>
                  <b>-CATHERINE </b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  We highly recommend WILLIAM DUDLEY Firm... they are truly
                  professional and "results' oriented"... Our publishing company
                  is at ease knowing they have our back!
                  <br></br>
                  <b>-Mary </b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  You all have been phenomenal in this case. I appreciate every
                  effort you all have put in to this to have the truth be seen
                  in court. I believe we made history, as I have legal rights to
                  my daughter.
                  <br></br>
                  <b> -Baba</b>
                </p>
              </ListItem>{" "}
            </Scroll4>
          </List>
        </Box>
      </Box>
    </>
  );
};
export const Book = () => {
  return (
    <Box
      m="auto"
      width={["90%", "90%", "60%", "60%"]}
      textAlign="center"
      mt="40px"
    >
      <Heading size="lg"> HOW CAN WE HELP YOU?</Heading>
      <Heading size="sm" color="#724e3f">
        FILL OUT THE FORM BELOW FOR A NO-OBLIGATION REVIEW OF YOUR CASE
      </Heading>
      <Box
        display={["grid", "grid", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Input
          isRequired
          type="text"
          variant="flushed"
          placeholder="First Name"
          m="30px"
          name="name"
        />
        <Input
          type="email"
          isRequired
          variant="flushed"
          placeholder="Last Name"
          name="email"
          m="30px"
        />
      </Box>
      <Box
        display={["grid", "grid", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Input
          isRequired
          type="text"
          variant="flushed"
          placeholder="Phone Number"
          m="30px"
          name="name"
        />
        <Input
          type="email"
          isRequired
          variant="flushed"
          placeholder="EMAIL ADDRESS"
          name="email"
          m="30px"
        />
      </Box>

      <Textarea
        type="text"
        isRequired
        variant="flushed"
        name="message"
        placeholder="description of your case"
        mb="30px"
        w="95%"
      />
      <Box textAlign="center">
        <Button
          bg="transparent"
          border="2px solid black"
          color="black"
          borderRadius="10px"
          p="20px"
          _hover={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          _active={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          _focus={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          fontWeight="100"
          fontSize={["15px", "15px", "", ""]}
        >
          Submit Your Case
        </Button>
      </Box>
    </Box>
  );
};

export const TermsPolicy = () => {
  return (
    <Box color="#b4816b" p={10}>
      <Heading mb={6} color="#b4816b" textAlign="center">
        Terms & Privacy Policy
      </Heading>

      <Accordion allowMultiple>
        {/* Terms of Service */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                1. Introduction
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Welcome to Williams Dudley Law Firm. By using our website and
            services, you agree to comply with and be bound by these Terms of
            Service. Please review them carefully before using our platform.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                2. Legal Advice Disclaimer
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The information on this website is provided for general
            informational purposes only and should not be considered legal
            advice. Contact a licensed attorney for advice regarding your
            specific legal matter.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                3. Confidentiality
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We take confidentiality seriously. Any communication you send to us
            will be treated with care, but no attorney-client relationship is
            established until a formal agreement is signed.
          </AccordionPanel>
        </AccordionItem>

        {/* Privacy Policy */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                4. Privacy & Data Protection
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We respect your privacy. Personal information collected via this
            website (such as through contact forms or newsletters) will be used
            only for communication purposes and will not be shared with third
            parties without your consent.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                5. Cookies & Tracking
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our website may use cookies to enhance your browsing experience. You
            may disable cookies in your browser settings, but some features may
            not function properly.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                6. Limitation of Liability
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Williams Dudley Law Firm shall not be held liable for any damages
            arising from the use of this website or reliance on the information
            provided herein.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                7. Changes to This Policy
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We reserve the right to update or modify these Terms & Privacy
            Policy at any time. Updates will be reflected on this page with a
            revised date.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="600">
                8. Contact Us
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            If you have any questions regarding our Terms or Privacy Policy,
            please contact us at: hello@williamsdudley.com
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
export const Contact = () => {
  return (
    <>
      <Flex
        display="flex"
        flexWrap="wrap"
        bg="black"
        color="white"
        mt="40px"
        p="40px"
      >
        <Box width={["90%", "90%", "60%", "60%"]} textAlign="center">
          <Box display="flex" justifyContent="center">
            <Image src={laeimg} alt="Dan Abramov" maxWidth="400px" />
          </Box>
        </Box>

        <Box width={["90%", "90%", "40%", "40%"]}>
          <Heading mt="20px" mb="20px">
            Get In Touch
          </Heading>

          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Phone
          </Text>
          <Text mb="20px"> (347) 472-5433</Text>

          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Email
          </Text>
          <Text mb="20px"> hello@williamsdudley.com</Text>

          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Social
          </Text>
          <ButtonGroup variant="ghost" mb="30px">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<BsTwitter fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<BsFacebook fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<BsLinkedin fontSize="1.25rem" />}
            />
          </ButtonGroup>

          <Text fontSize="12px" mb="20px">
            Milcheur Law is an accessible
            <br />
            workplace. Persons with
            <br />
            disabilities are welcome to apply.
          </Text>

          {/* Newsletter Subscribe Section */}
          <Box mt="30px">
            <Text fontSize="20px" fontWeight="600" color="#b4816b" mb="10px">
              Subscribe to Our Newsletter
            </Text>
            <Flex>
              <Input
                type="email"
                placeholder="Enter your email"
                bg="white"
                color="black"
                _placeholder={{ color: "gray.500" }}
                mr={2}
              />
              <Button
                colorScheme="orange"
                bg="#b4816b"
                color="white"
                _hover={{ bg: "#a06f58" }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Text fontSize="sm" bg="black" color="white" textAlign="center">
        &copy; {new Date().getFullYear()} WILLIAM DUDLEY , Inc. All rights
        reserved.
      </Text>
    </>
  );
};

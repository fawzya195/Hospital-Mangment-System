import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo (1).png";
import { FaUserDoctor } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #2fbf8f, #27ae60)",
        }}
      ></div>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="MediCare Logo"
              style={{ width: "70px", height: "70px" }}
              className="me-2"
            />
            <div>
              <div
                className="fw-bold fs-4 lh-1"
                style={{ color: "#1b3a4b", fontFamily: "serif" }}
              >
                MediCare
              </div>
              <small className="text-muted" style={{ fontSize: "0.7rem" }}>
                Healthcare Solutions
              </small>
            </div>
          </Link>

          {/* Hamburger / X button - ظاهر بس في الموبايل بسبب d-lg-none */}
          <button
            className="navbar-toggler border-0 d-flex d-lg-none flex-column justify-content-center align-items-center"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{
              width: "40px",
              height: "40px",
              background: "transparent",
              boxShadow: "none",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2.5px",
                backgroundColor: "#1b3a4b",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen
                  ? "rotate(45deg) translate(6px, 6px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2.5px",
                backgroundColor: "#1b3a4b",
                borderRadius: "2px",
                margin: "5px 0",
                transition: "all 0.3s ease",
                opacity: isOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2.5px",
                backgroundColor: "#1b3a4b",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: isOpen
                  ? "rotate(-45deg) translate(6px, -6px)"
                  : "none",
              }}
            ></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <div
              className="mx-auto my-3 my-lg-0 d-flex flex-column flex-lg-row align-items-center"
              style={{
                border: "1.5px solid #e5f3ee",
                borderRadius: "50px",
                padding: "8px 10px",
                gap: "8px",
              }}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link fw-medium px-3 position-relative ${isActive ? "text-success" : "text-dark"}`
                }
              >
                {({ isActive }) => <>Home{isActive && <Dot />}</>}
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `nav-link fw-medium px-3 position-relative ${isActive ? "text-success" : "text-dark"}`
                }
              >
                {({ isActive }) => <>Doctors{isActive && <Dot />}</>}
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link fw-medium px-3 position-relative ${isActive ? "text-success" : "text-dark"}`
                }
              >
                {({ isActive }) => <>Services{isActive && <Dot />}</>}
              </NavLink>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  `nav-link fw-medium px-3 position-relative ${isActive ? "text-success" : "text-dark"}`
                }
              >
                {({ isActive }) => <>Appointments{isActive && <Dot />}</>}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link fw-medium px-3 position-relative ${isActive ? "text-success" : "text-dark"}`
                }
              >
                {({ isActive }) => <>Contact{isActive && <Dot />}</>}
              </NavLink>
            </div>

            <div className="d-flex flex-column flex-lg-row gap-2 align-items-stretch align-items-lg-center">
              <Link
                to="/doctor-admin"
                className="btn rounded-pill px-3 py-2 fw-medium d-flex align-items-center justify-content-center gap-2"
                style={{
                  border: "1.5px solid #2fbf8f",
                  color: "#2fbf8f",
                  backgroundColor: "transparent",
                  fontSize: "0.9rem",
                }}
              >
                <FaUserDoctor size={14} />
                Doctor Admin
              </Link>
              <Link
                to="/login"
                className="btn rounded-pill px-4 py-2 fw-medium text-white d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #2fbf8f, #27ae60)",
                  fontSize: "0.9rem",
                }}
              >
                <PiSignInBold size={14} />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Dot = () => (
  <span
    style={{
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: "#2fbf8f",
    }}
  ></span>
);

export default Navbar;

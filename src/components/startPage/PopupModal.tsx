import React from "react";
import { MenuIcon } from "../../types/Menu";

interface PopupModalProps {
  /* FIXME: Import this icon from the type -- DRY */
  icon: "▶️" | "🏆" | "🔧" | "❓" | "⭐";
  headerText: string;
  children: any;
}

export default function PopupModal({
  icon,
  headerText,
  children,
}: PopupModalProps) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/*
    allows user to click outside to close the modal
    <div className="fixed inset-0 h-full w-full bg-black opacity-40"></div>
    */}
      <div className="flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-lg">
          {/* TODO: Consider better implementation of overflow scroll */}
          <div className="mt-3 max-h-[90%] overflow-y-auto p-2 sm:flex">
            <div className="mx-auto flex h-12 w-12 flex-none items-center justify-center rounded-full bg-blue-100">
              {icon}
            </div>
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              <h4 className="text-lg font-medium text-gray-800">
                {headerText}
              </h4>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

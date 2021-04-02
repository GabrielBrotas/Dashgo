import React from "react";
import { ElementType } from "react";
import { Icon, Link, Text } from "@chakra-ui/react";

interface NavLinkProps {
    title: string;
    icon: ElementType;
}

export function NavLink({ title, icon }: NavLinkProps) {
    return (
    <Link display="flex" align="center">
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
    )
}
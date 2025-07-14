package br.com.pontualimportbrindes;

import java.awt.*;
import java.awt.event.*;

import javax.swing.*;
import javax.swing.event.*;
import javax.swing.filechooser.*;

import java.io.*;
import java.util.*;
import java.text.*;

import static br.com.pontualimportbrindes.shortcut.Printer.print;

public class SiteBuilder extends JFrame implements ActionListener {
    public SiteBuilder() {
        super("Pontual Site Builder");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        setLocation(0, 0);
        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());
        panel.add(new JLabel("The panel"));
        
        add(panel);
        pack();
        
    }

    public void actionPerformed(ActionEvent e) {

    }

    public static void main(String[] args) {
        SiteBuilder siteBuilder = null;

        try {
            siteBuilder = new SiteBuilder();
            siteBuilder.setVisible(true);
            
            print("built site builder");
            Produto p = new Produto("120000");
            print(p);
            print(new Produto("130000", "radios, relogios, FERRAMENTAS", "Radio atomico"));
            print(new Produto("140000", "canecas", "Caneca 300 mL", "10x5x13"));
        }
        catch (Exception e) {
            e.printStackTrace();
            System.exit(-1);
        }
    }
}

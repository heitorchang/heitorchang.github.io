package br.com.pontualimportbrindes;

import java.util.*;

public class Produto {
    String codigo;
    String[] categorias;
    String descricao;
    String dimensoes;

    public Produto(String codigo, String categoriaRaw, String descricao, String dimensoes) {
        this.codigo = codigo.toUpperCase();
        this.categorias = categoriaRaw.split(",");
        for (int i = 0; i < categorias.length; i++) {
            categorias[i] = categorias[i].trim().toLowerCase();
        }
        this.descricao = descricao;
        this.dimensoes = dimensoes.trim().equals("") ? "" : "(" + dimensoes.replace("x", " x ").replace(".", ",") + " cm)";
    }
    
    public Produto(String codigo) {
        this(codigo, "Diversos", "", "");
    }

    public Produto(String codigo, String categoriaRaw, String descricao) {
        this(codigo, categoriaRaw, descricao, "");
    }

    @Override
    public String toString() {
        String categoriaRaw = "";
        for (int i = 0; i < this.categorias.length; i++) {
            categoriaRaw += this.categorias[i] + ",";
        }
        categoriaRaw = categoriaRaw.substring(0, categoriaRaw.length() - 1);
        return this.codigo + " " + categoriaRaw + " - " + this.descricao + " " + this.dimensoes;
    }

    public String getCodigo() {
        return this.codigo;
    }

    public String[] getCategorias() {
        return this.categorias;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public String getDimensoes() {
        return this.dimensoes;
    }
}
